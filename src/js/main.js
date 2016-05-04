import declare from 'dojo/_base/declare';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import esriConfig from 'esri/config';
import StlCrimeLayer from './StlCrimeLayer';
import domReady from 'dojo/domReady!';


export default declare([], {
  init() {
    esriConfig.request.corsEnabledServers.push('crossorigin.me');

    let map = new Map({
      basemap: "streets"
    });
    var view = new MapView({
      container: "viewDiv",
      map: map,
      scale: 500000,
      center: [-90.199404, 38.627003]
    });
    this.updateLayer(map);
  },

  updateLayer(map) {
    this.stlCrimeLayer = new StlCrimeLayer({
      map: map
    });
  }
});
