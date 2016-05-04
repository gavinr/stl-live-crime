import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import esriRequest from 'esri/request';
import domConstruct from 'dojo/dom-construct';
import query from 'dojo/query';
import nlTravers from 'dojo/NodeList-traverse';
import Graphic from 'esri/Graphic';
import SimpleMarkerSymbol from 'esri/symbols/SimpleMarkerSymbol';
import Point from 'esri/geometry/Point';
import PopupTemplate from 'esri/PopupTemplate';

export default declare([_WidgetBase], {
  postCreate() {
    this.inherited(arguments);
    this.graphicsLayer = new GraphicsLayer();
    this.map.add(this.graphicsLayer);
    this.updateLayer();
  },

  updateLayer() {
    this.getData('https://crossorigin.me/http://www.slmpd.org/cfs.aspx').then((data) => {
      let node = domConstruct.toDom(data.data);

      // parse the data we're getting back from STLMPD website:
      let allData = query('table', node).children('tbody').children('tr').map((node) => {
        [date, id, address, offense] = query('td font', node).map((td) => {return td.innerHTML;});
        return {date: date, id: id, address: address.replace('XX ', '00 ').replace(' / ', ' and ') + ', St. Louis, MO, USA', offense: offense};
      });
      this.addData(allData, 'id');
    });
  },

  getData(url) {
    return esriRequest(url, {
      responseType: 'text'
    });
  },

  addData(data, keyField) {
    data.forEach((crimeObject) => {
      this.geocode(crimeObject.address).then((geocodeResult) => {
        if (geocodeResult.data.locations.length > 0) {
          let graphic = new Graphic({
            attributes: crimeObject,
            geometry: new Point({latitude: geocodeResult.data.locations[0].feature.geometry.y, longitude: geocodeResult.data.locations[0].feature.geometry.x}),
            symbol: new SimpleMarkerSymbol({
              style: "diamond",
              color: [255, 128, 45],  // No need to write new Color()
              outline: {              // No need for new SimpleLineSymbol()
                style: "dash-dot",
                color: [255, 128, 45] // Again, no need for new Color()
              }
            }),
            popupTemplate: new PopupTemplate({title: '{offense}', content: '{address}<br />{date}'})
          });
          this.graphicsLayer.add(graphic);
        }
      });
    });
  },

  geocode(address) {
    return esriRequest('http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find', {
      responseType: 'json',
      query: {
        text: address,
        f: 'json'
      }
    })
  }
});
