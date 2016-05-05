define(['dojo/_base/declare', 'esri/Map', 'esri/views/MapView', 'esri/config', './StlCrimeLayer', 'dojo/domReady!'], function (declare, Map, MapView, esriConfig, StlCrimeLayer, domReady) {
  return declare([], {
    init: function init() {
      esriConfig.request.corsEnabledServers.push('crossorigin.me');

      var map = new Map({
        basemap: "streets"
      });
      var view = new MapView({
        container: "viewDiv",
        map: map,
        scale: 200000,
        center: [-90.199404, 38.627003]
      });
      this.updateLayer(map);
    },
    updateLayer: function updateLayer(map) {
      this.stlCrimeLayer = new StlCrimeLayer({
        map: map
      });
    }
  });
});