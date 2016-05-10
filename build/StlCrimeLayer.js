define(['dojo/_base/declare', 'dijit/_WidgetBase', 'esri/layers/FeatureLayer', 'esri/request', 'dojo/dom-construct', 'dojo/query', 'dojo/NodeList-traverse', 'esri/Graphic', 'esri/renderers/UniqueValueRenderer', 'esri/symbols/SimpleMarkerSymbol', 'esri/geometry/Point', 'esri/PopupTemplate', 'dojo/Evented'], function (declare, _WidgetBase, FeatureLayer, esriRequest, domConstruct, query, nlTravers, Graphic, UniqueValueRenderer, SimpleMarkerSymbol, Point, PopupTemplate, Evented) {
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

  return declare([_WidgetBase, Evented], {
    postCreate: function postCreate() {
      this.inherited(arguments);
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

          return { date: date, id: id, address: address.replace('XX ', '00 ').replace(' / ', ' and ') + ', St. Louis, MO, USA', offense: offense, size: _this.getSize(date) };
        });
        _this.addData(allData, 'id');
      });
    },
    getSize: function getSize(date) {
      var difference = Math.abs(new Date() - new Date(date));
      var retSize = 1;
      if (difference < 3600000) {
        // 1 hour
        retSize = 3;
      } else if (difference < 7200000) {
        // 2 hours
        retSize = 2;
      }
      return retSize;
    },
    getData: function getData(url) {
      return esriRequest(url, {
        responseType: 'text'
      });
    },
    addData: function addData(data) {
      var _this2 = this;

      this.geocodeAll(data).then(function (geocodedResults) {
        var graphicsArr = geocodedResults.map(function (res, i) {
          var ret = false;
          if (res.data.locations && res.data.locations.length > 0) {
            ret = new Graphic({
              attributes: data[i],
              geometry: new Point({ latitude: res.data.locations[0].feature.geometry.y, longitude: res.data.locations[0].feature.geometry.x })
            });
          }

          return ret;
        }).filter(function (arrayValue) {
          return arrayValue;
        });

        _this2.updateMap(graphicsArr);
      });
    },
    geocodeAll: function geocodeAll(crimeObject) {
      var _this3 = this;

      return Promise.all(crimeObject.map(function (obj) {
        return _this3.geocode(obj.address);
      }));
    },
    geocode: function geocode(address) {
      return esriRequest('http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find', {
        'responseType': 'json',
        'query': {
          'text': address,
          'f': 'json'
        }
      });
    },
    updateMap: function updateMap(graphicsArr) {
      if (this.fl) {
        this.map.remove(this.fl);
        this.fl.destroy();
      }

      this.fl = new FeatureLayer({
        // create an instance of esri/layers/support/Field for each field object
        fields: [{
          name: "id",
          alias: "id",
          type: "oid"
        }, {
          name: "address",
          alias: "address",
          type: "string"
        }, {
          name: "date",
          alias: "date",
          type: "string"
        }, {
          name: "offense",
          alias: "offense",
          type: "string"
        }],
        objectIdField: "id",
        geometryType: "point",
        spatialReference: { wkid: 4326 },
        source: graphicsArr,
        popupTemplate: new PopupTemplate({ title: '{offense}', content: '{address}<br />{date}' }),
        renderer: this.getUvr(graphicsArr, 'offense')
      });
      this.map.add(this.fl);
      this.emit('featureLayerAdded');
    },
    getUvr: function getUvr(graphicsArr, attribute) {
      var _this4 = this;

      // get unique list:
      var uniqueAttrs = [];
      graphicsArr.forEach(function (item) {
        if (uniqueAttrs.indexOf(item.attributes[attribute]) === -1) {
          uniqueAttrs.push(item.attributes[attribute]);
        }
      });

      var retRenderer = new UniqueValueRenderer({
        field: attribute,
        defaultSymbol: new SimpleMarkerSymbol()
      });

      // unique colors for the "types" of crimes
      uniqueAttrs.forEach(function (uniqueAttr) {
        retRenderer.addUniqueValueInfo(uniqueAttr, new SimpleMarkerSymbol({
          color: _this4.hashStringToColor(uniqueAttr)
        }));
      });

      // more recent events should be larger. older = smaller
      retRenderer.visualVariables = [{
        'type': 'size',
        'field': 'size',
        'minSize': 5,
        'maxSize': 18,
        'minDataValue': 1,
        'maxDataValue': 3
      }];

      return retRenderer;
    },
    hashStringToColor: function hashStringToColor(str) {
      // str to hash - from http://stackoverflow.com/a/16348977/2039
      for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash)) {}

      // int/hash to hex
      for (var i = 0, colour = "#"; i < 3; colour += ("00" + (hash >> i++ * 8 & 0xFF).toString(16)).slice(-2)) {}

      return colour;
    }
  });
});