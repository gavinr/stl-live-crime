define(['dojo/_base/declare', 'dijit/_WidgetBase', 'esri/layers/GraphicsLayer', 'esri/request', 'dojo/dom-construct', 'dojo/query', 'dojo/NodeList-traverse', 'esri/Graphic', 'esri/symbols/SimpleMarkerSymbol', 'esri/geometry/Point', 'esri/PopupTemplate'], function (declare, _WidgetBase, GraphicsLayer, esriRequest, domConstruct, query, nlTravers, Graphic, SimpleMarkerSymbol, Point, PopupTemplate) {
  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  return declare([_WidgetBase], {
    postCreate: function postCreate() {
      this.inherited(arguments);
      this.graphicsLayer = new GraphicsLayer();
      this.map.add(this.graphicsLayer);
      this.updateLayer();
    },
    updateLayer: function updateLayer() {
      var _this = this;

      this.getData('https://crossorigin.me/http://www.slmpd.org/cfs.aspx').then(function (data) {
        var node = domConstruct.toDom(data.data);

        // parse the data we're getting back from STLMPD website:
        var allData = query('table', node).children('tbody').children('tr').map(function (node) {
          var _query$map = query('td font', node).map(function (td) {
            return td.innerHTML;
          });

          var _query$map2 = _slicedToArray(_query$map, 4);

          date = _query$map2[0];
          id = _query$map2[1];
          address = _query$map2[2];
          offense = _query$map2[3];

          return { date: date, id: id, address: address.replace('XX ', '00 ').replace(' / ', ' and ') + ', St. Louis, MO, USA', offense: offense };
        });
        _this.addData(allData, 'id');
      });
    },
    getData: function getData(url) {
      return esriRequest(url, {
        responseType: 'text'
      });
    },
    addData: function addData(data, keyField) {
      var _this2 = this;

      data.forEach(function (crimeObject) {
        _this2.geocode(crimeObject.address).then(function (geocodeResult) {
          if (geocodeResult.data.locations.length > 0) {
            var graphic = new Graphic({
              attributes: crimeObject,
              geometry: new Point({ latitude: geocodeResult.data.locations[0].feature.geometry.y, longitude: geocodeResult.data.locations[0].feature.geometry.x }),
              symbol: new SimpleMarkerSymbol({
                style: "diamond",
                color: [255, 128, 45], // No need to write new Color()
                outline: { // No need for new SimpleLineSymbol()
                  style: "dash-dot",
                  color: [255, 128, 45] // Again, no need for new Color()
                }
              }),
              popupTemplate: new PopupTemplate({ title: '{offense}', content: '{address}<br />{date}' })
            });
            _this2.graphicsLayer.add(graphic);
          }
        });
      });
    },
    geocode: function geocode(address) {
      return esriRequest('http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find', {
        responseType: 'json',
        query: {
          text: address,
          f: 'json'
        }
      });
    }
  });
});