import declare from 'dojo/_base/declare';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import esriConfig from 'esri/config';
import StlCrimeLayer from './StlCrimeLayer';
import LoadingIcon from './LoadingIcon';
import on from 'dojo/on';


export default declare([], {
  init() {
    esriConfig.request.corsEnabledServers.push('crossorigin.me');

    this.loadingIcon = new LoadingIcon();
    this.loadingIcon.startup();
    this.loadingIcon.show();

    let map = new Map({
      basemap: "streets"
    });
    let view = new MapView({
      container: "viewDiv",
      map: map,
      scale: 200000,
      center: [-90.199404, 38.627003]
    });
    this.updateLayer(map);
  },

  updateLayer(map) {
    this.stlCrimeLayer = new StlCrimeLayer({
      map: map
    });
    on(this.stlCrimeLayer, 'featureLayerAdded', () => {
      this.loadingIcon.hide();
    });
  }
});
