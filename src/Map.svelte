<script>
  export let selectedCrime = "";
  export let crimes = "";

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
        zoom: 8,
        center: [-90, 38] // longitude, latitude
      });
      graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });

  $: if (view && selectedCrime !== "") {
    view.center = [selectedCrime.lon, selectedCrime.lat];
    // view.zoom = 16;
  }

  $: if (crimes && crimes.length > 0) {
    loadModules(
      ["esri/layers/GraphicsLayer", "esri/Graphic", "esri/geometry/Point"],
      {
        css: true
      }
    ).then(([GraphicsLayer, Graphic, Point]) => {
      // TESTING ---------------------

      const crime = crimes[5];
      console.log("crimes", crimes);
      let graphics = crimes.map(crimeObject => {
        if (crimeObject.lat && crimeObject.lon) {
          const point = new Point({
            type: "point", // autocasts as new Polyline()
            latitude: crimeObject.lat,
            longitude: crimeObject.lon
          });
          const pointSymbol = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            style: "square",
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
  #viewDiv {
    padding: 0;
    margin: 0;
    height: 800px;
    width: 100%;
  }
</style>

<div id="viewDiv" />
