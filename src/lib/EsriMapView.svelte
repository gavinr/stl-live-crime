<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import { crimesStore } from "./stores";
    import type { Crime } from "./types";

    import MapView from "@arcgis/core/views/MapView";
    import Map from "@arcgis/core/Map";
    import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
    import Graphic from "@arcgis/core/Graphic";
    import Point from "@arcgis/core/geometry/Point";

    export let selectedCrime: Crime;
    export let centerMap = false;

    const dispatch = createEventDispatcher();

    let map;
    let view;
    let graphicsLayer;
    let crimes;

    const unsubscribe = crimesStore.subscribe((value) => {
        crimes = value;
    });
    onDestroy(unsubscribe);

    const createMapView = (domNode) => {
        view = new MapView({
            container: domNode,
            map: {
                basemap: "streets",
            },
            zoom: 12,
            center: [-90.28, 38.6], // longitude, latitude
        });
        graphicsLayer = new GraphicsLayer();
        view.map.add(graphicsLayer);

        view.watch("popup.visible", (evt) => {
            if (evt === false) {
                dispatch("selected", false);
            }
        });

        view.on("click", function (event) {
            // Search for graphics at the clicked location. View events can be used
            // as screen locations as they expose an x,y coordinate that conforms
            // to the ScreenPoint definition.
            view.hitTest(event).then(function (response) {
                if (response.results.length) {
                    var graphic = response.results.filter(function (result) {
                        // check if the graphic belongs to the layer of interest
                        return result.graphic.layer === graphicsLayer;
                    })[0].graphic;

                    // do something with the result graphic
                    dispatch("selected", graphic.attributes);
                } else {
                    dispatch("selected", false);
                }
            });
        });
    };

    $: if (view && selectedCrime) {
        if (selectedCrime) {
            if (centerMap === true) {
                view.center = [selectedCrime.lon, selectedCrime.lat];
            }
            const feature = graphicsLayer.graphics.find((graphic) => {
                return graphic.attributes.id === selectedCrime.id;
            });
            view.popup.features = [feature];
            view.popup.location = feature.geometry;
            view.popup.visible = true;
        } else {
            view.popup.visible = false;
        }
    }

    $: if (crimes && crimes.length > 0) {
        let graphics = crimes.map((crimeObject) => {
            if (crimeObject.lat && crimeObject.lon) {
                const point = new Point({
                    // type: "point", // autocasts as new Polyline()
                    latitude: crimeObject.lat,
                    longitude: crimeObject.lon,
                });
                const pointSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    style: "circle",
                    color: "green",
                    size: crimeObject.size + "px", // pixels
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 0],
                        width: 3, // points
                    },
                };
                const attributes = crimeObject;

                return new Graphic({
                    geometry: point,
                    symbol: pointSymbol,
                    attributes,
                    popupTemplate: {
                        title: crimeObject.offense,
                        content: "{date}<br />{address}",
                    },
                });
            }
        });

        graphicsLayer.removeAll();
        graphicsLayer.addMany(graphics);
    }
</script>

<main>
    <div use:createMapView />
</main>

<style>
    main {
        grid-column: 1 / span 3;
    }
    div {
        height: 100%;
        width: 100%;
    }
    @media (max-width: 700px) {
        main {
            grid-column: 1 / span 5;
        }
    }
</style>
