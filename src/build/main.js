define(['dojo/_base/declare', 'esri/Map', 'esri/views/MapView', 'esri/config', './StlCrimeLayer', './LoadingIcon', 'dojo/on'], function (declare, Map, MapView, esriConfig, StlCrimeLayer, LoadingIcon, on) {
  return declare([], {
    init: function init() {
      esriConfig.request.corsEnabledServers.push('crossorigin.me');

      this.loadingIcon = new LoadingIcon();
      this.loadingIcon.startup();
      this.loadingIcon.show();

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
      var _this = this;

      this.stlCrimeLayer = new StlCrimeLayer({
        map: map
      });
      on(this.stlCrimeLayer, 'featureLayerAdded', function () {
        _this.loadingIcon.hide();
      });
    }
  });
});