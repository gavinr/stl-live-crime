<script>
  export let selectedCrime = '';

  let view;

  import { loadModules } from "esri-loader";
  loadModules(["esri/Map", "esri/views/MapView"], { css: true })
    .then(([Map, MapView]) => {
      // then we load a web map from an id
      const map = new Map({
        basemap: "streets"
      });
      view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 8,
        center: [-90, 38] // longitude, latitude
      });

      
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });

    $: if(view && selectedCrime !== '') {
      view.center = [selectedCrime.lon, selectedCrime.lat];
      view.zoom = 13;
    }
</script>

<style>
  #viewDiv {
    padding: 0;
    margin: 0;
    height: 400px;
    width: 400px;
  }
</style>

{#if selectedCrime !== ''}
  <div>Selected: {selectedCrime.id}</div>
{/if}
<div id="viewDiv" />