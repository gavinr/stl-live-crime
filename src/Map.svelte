<script>
  export let selectedCrime = "";
  export let crimes = "";
  import { createEventDispatcher } from 'svelte';

  const dispatch  = createEventDispatcher();

  let map;
  let view;
  let graphicsLayer;

  import { loadModules } from "esri-loader";
  loadModules(
    [
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/GraphicsLayer",
      "esri/Graphic",
      "esri/geometry/Point"
    ],
    {
      css: true
    }
  )
    .then(([Map, MapView, GraphicsLayer, Graphic, Point]) => {
      // then we load a web map from an id
      map = new Map({
        basemap: "streets"
      });
      view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 12,
        center: [-90.28, 38.6] // longitude, latitude
      });
      graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      view.watch('popup.visible', (evt) => {
        // console.log('popup.visible', evt);
        if(evt === false) {
          dispatch('selected', false);
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
            dispatch('selected', graphic.attributes);
          } else {
            dispatch('selected', false);
          }
        });
      });
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });

  $: if (view && selectedCrime !== "") {
    if (selectedCrime === false) {
      view.popup.visible = false;
    } else {
      view.center = [selectedCrime.lon, selectedCrime.lat];
      const feature = graphicsLayer.graphics.find(graphic => {
        return graphic.attributes.id === selectedCrime.id;
      });
      view.popup.features = [feature];
      view.popup.location = feature.geometry;
      view.popup.visible = true;
      // view.zoom = 16;
    }
  }

  $: if (crimes && crimes.length > 0) {
    loadModules(
      ["esri/layers/GraphicsLayer", "esri/Graphic", "esri/geometry/Point"],
      {
        css: true
      }
    ).then(([GraphicsLayer, Graphic, Point]) => {
      // TESTING ---------------------

      // const crime = crimes[5];
      // console.log("crimes", crimes);
      let graphics = crimes.map(crimeObject => {
        if (crimeObject.lat && crimeObject.lon) {
          const point = new Point({
            type: "point", // autocasts as new Polyline()
            latitude: crimeObject.lat,
            longitude: crimeObject.lon
          });
          const pointSymbol = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            style: "circle",
            color: "green",
            size: crimeObject.size + "px", // pixels
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: [255, 255, 0],
              width: 3 // points
            }
          };
          const attributes = crimeObject;

          return new Graphic({
            geometry: point,
            symbol: pointSymbol,
            attributes,
            popupTemplate: {
              title: crimeObject.offense,
              content: "{date}<br />{address}"
            }
          });
        }
      });

      graphicsLayer.removeAll();
      graphicsLayer.addMany(graphics);
    });
  }
</script>

<style>
  main {
    grid-column: 1 / span 3;
  }
  #viewDiv {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 700px) {
    main {
      grid-column: 1 / span 5;
    }
  }
</style>

<main>
  <div id="viewDiv" />
</main>
