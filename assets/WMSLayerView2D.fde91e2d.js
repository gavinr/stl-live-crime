var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;import{ar as s,as as o,dc as n,at as p,J as m,I as h,cW as l,V as c,cn as d}from"./vendor.6e209a4d.js";import{t as u}from"./BitmapContainer.d24793d8.js";import{l as y,d as f}from"./LayerView.e6fb419e.js";import{S as g}from"./ExportStrategy.ff1ab748.js";import{l as x}from"./ExportWMSImageParameters.26cb71ff.js";import"./WGLContainer.e0524ef7.js";import"./definitions.8ca8ae21.js";import"./VertexArrayObject.59d5ee02.js";import"./Texture.3086c6ff.js";import"./Utils.ab398aa7.js";import"./ShaderCompiler.b1ea523b.js";import"./config.042ea55e.js";import"./GeometryUtils.c1792d3b.js";import"./MaterialKey.a25e277c.js";import"./Container.2fe15eee.js";import"./mat4f32.9c1247c6.js";import"./earcut.b5c0cad1.js";import"./Bitmap.8b53ffa8.js";const w=e=>{let t=class extends e{initialize(){this.exportImageParameters=new x({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const i=this.createFetchPopupFeaturesQuery(e);if(!i)return Promise.resolve([]);const{extent:a,width:s,height:o,x:n,y:p}=i;if(!(a&&s&&o))throw new m("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:s,height:o});const h=t.fetchFeatureInfo(a,s,o,n,p);return Promise.resolve(h?[h]:[])}};return s([o()],t.prototype,"exportImageParameters",void 0),s([o({readOnly:!0})],t.prototype,"exportImageVersion",null),s([o()],t.prototype,"layer",void 0),s([o(n)],t.prototype,"timeExtent",void 0),t=s([p("esri.layers.mixins.WMSLayerView")],t),t},b=h.getLogger("esri.views.2d.layers.WMSLayerView2D");let v=class extends(w(l(y(f)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{c(e)||b.error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new u,this.container.addChild(this._bitmapContainer),this.strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:a}=e,{spatialReference:s}=t;let o=null,n=0,p=0;if(r.children.some((e=>{const{width:t,height:r,resolution:m,x:h,y:l}=e,c=h+m*t,u=l-m*r;return i>=h&&i<=c&&a<=l&&a>=u&&(o=new d({xmin:h,ymin:u,xmax:c,ymax:l,spatialReference:s}),n=t,p=r,!0)})),!o)return null;const m=o.width/n,h=Math.round((i-o.xmin)/m),l=Math.round((o.ymax-a)/m);return{extent:o,width:n,height:p,x:h,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,s,o,n){return this.layer.fetchImage(e,s,o,((e,s)=>{for(var o in s||(s={}))r.call(s,o)&&a(e,o,s[o]);if(t)for(var o of t(s))i.call(s,o)&&a(e,o,s[o]);return e})({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},n))}};s([o()],v.prototype,"strategy",void 0),s([o()],v.prototype,"updating",void 0),v=s([p("esri.views.2d.layers.WMSLayerView2D")],v);var j=v;export{j as default};
