import{ar as e,as as t,cC as r,dx as o,at as p,cn as a,bm as s}from"./vendor.6e209a4d.js";import{x as i}from"./WebTileLayer.81acd8e9.js";let n=class extends i{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,s.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};e([t({type:r,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"portalItem",void 0),e([t({type:Boolean,json:{read:!1,write:!1}})],n.prototype,"isReference",void 0),e([t({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"refreshInterval",null),e([t({type:o,json:{write:!1}})],n.prototype,"tileInfo",void 0),e([t({type:["show","hide"]})],n.prototype,"listMode",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"subDomains",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"fullExtent",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"urlTemplate",void 0),e([t({type:["OpenStreetMap"]})],n.prototype,"operationalLayerType",void 0),e([t({json:{read:!1}})],n.prototype,"type",void 0),e([t({json:{read:!1,write:!1}})],n.prototype,"copyright",void 0),e([t({json:{read:!1,write:!1}})],n.prototype,"wmtsInfo",void 0),n=e([p("esri.layers.OpenStreetMapLayer")],n);var d=n;export{d as default};