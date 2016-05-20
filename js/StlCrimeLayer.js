import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import FeatureLayer from 'esri/layers/FeatureLayer';
import esriRequest from 'esri/request';
import domConstruct from 'dojo/dom-construct';
import query from 'dojo/query';
import nlTravers from 'dojo/NodeList-traverse';
import Graphic from 'esri/Graphic';
import UniqueValueRenderer from 'esri/renderers/UniqueValueRenderer';
import SimpleMarkerSymbol from 'esri/symbols/SimpleMarkerSymbol';
import Point from 'esri/geometry/Point';
import PopupTemplate from 'esri/PopupTemplate';
import Evented from 'dojo/Evented';

export default declare([_WidgetBase, Evented], {
  postCreate() {
    this.inherited(arguments);
    this.updateLayer();
  },

  updateLayer() {
    this.getData('https://jsonp.afeld.me?url=http://www.slmpd.org/cfs.aspx').then((data) => {
      let node = domConstruct.toDom(data.data);
      // parse the data we're getting back from STLMPD website:
      let allData = query('table', node).children('tbody').children('tr').map((node) => {
        [date, id, address, offense] = query('td font', node).map((td) => { return td.innerHTML; });
        return {date: date, id: id, address: address.replace('XX ', '00 ').replace(' / ', ' and ') + ', St. Louis, MO, USA', offense: offense, size: this.getSize(date)};
      });
      this.addData(allData, 'id');
    }, (err) => {
      console.log('ERROR', err);
    });
  },

  /** based on the time, give a "size" value. 3 for more recent, 1 for older **/
  getSize(date) {
    let difference = Math.abs(new Date() - new Date(date));
    let retSize = 1;
    if (difference < 3600000) {
      // 1 hour
      retSize = 3;
    } else if (difference < 7200000) {
      // 2 hours
      retSize = 2;
    }

    return retSize;
  },

  getData(url) {
    return esriRequest(url, {
      responseType: 'text'
    });
  },

  addData(data) {
    this.geocodeAll(data).then((geocodedResults) => {
      let graphicsArr = geocodedResults.map((res, i) => {
        let ret = false;
        if (res.data.locations && res.data.locations.length > 0) {
          ret = new Graphic({
            attributes: data[i],
            geometry: new Point({latitude: res.data.locations[0].feature.geometry.y, longitude: res.data.locations[0].feature.geometry.x})
          });
        }

        return ret;
      }).filter((arrayValue) => arrayValue);

      this.updateMap(graphicsArr);
    });
  },

  geocodeAll(crimeObject) {
    return Promise.all(crimeObject.map((obj) => this.geocode(obj.address)));
  },

  geocode(address) {
    return esriRequest('http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find', {
      'responseType': 'json',
      'query': {
        'text': address,
        'f': 'json'
      }
    });
  },

  updateMap(graphicsArr) {
    if (this.fl) {
      this.map.remove(this.fl);
      this.fl.destroy();
    }

    this.fl = new FeatureLayer({
       // create an instance of esri/layers/support/Field for each field object
       fields: [
       {
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
       spatialReference: {wkid: 4326},
       source: graphicsArr,
       popupTemplate: new PopupTemplate({title: '{offense}', content: '{address}<br />{date}'}),
       renderer: this.getUvr(graphicsArr, 'offense')
    });
    this.map.add(this.fl);
    this.emit('featureLayerAdded');
  },

  getUvr(graphicsArr, attribute) {
    // get unique list:
    let uniqueAttrs = [];
    graphicsArr.forEach((item) => {
      if (uniqueAttrs.indexOf(item.attributes[attribute]) === -1) {
        uniqueAttrs.push(item.attributes[attribute]);
      }
    });

    let retRenderer = new UniqueValueRenderer({
      field: attribute,
      defaultSymbol: new SimpleMarkerSymbol()
    });

    // unique colors for the "types" of crimes
    uniqueAttrs.forEach((uniqueAttr) => {
      retRenderer.addUniqueValueInfo(uniqueAttr,
        new SimpleMarkerSymbol({
          color: this.hashStringToColor(uniqueAttr)
        })
      );
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

  /** converts a string to a hex color **/
  hashStringToColor(str) {
    // str to hash - from http://stackoverflow.com/a/16348977/2039
    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

    // int/hash to hex
    for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

    return colour;
  }
});
