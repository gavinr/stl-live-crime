var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,n=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&o(e,r,t[r]);return e};import{ar as p,at as m,as as l,dc as h,J as c,G as d,cD as u,dg as f,I as g,cW as y,dC as b,V as j}from"./vendor.6e209a4d.js";import{t as v}from"./BitmapContainer.d24793d8.js";import{l as w,d as x}from"./LayerView.e6fb419e.js";import{t as C,o as I}from"./BaseGraphicContainer.d203f6ef.js";import{I as P}from"./Utils.ab398aa7.js";import{S as U}from"./ExportStrategy.ff1ab748.js";import{n as S}from"./ExportImageParameters.7690a489.js";import{s as V}from"./clickToleranceUtils.bcc7d4ae.js";import{t as E,d as G}from"./popupUtils.c03ab2a8.js";import{a as M}from"./drapedUtils.c6ea3374.js";import"./WGLContainer.e0524ef7.js";import"./definitions.8ca8ae21.js";import"./VertexArrayObject.59d5ee02.js";import"./Texture.3086c6ff.js";import"./ShaderCompiler.b1ea523b.js";import"./config.042ea55e.js";import"./GeometryUtils.c1792d3b.js";import"./MaterialKey.a25e277c.js";import"./Container.2fe15eee.js";import"./mat4f32.9c1247c6.js";import"./earcut.b5c0cad1.js";import"./quantizationUtils.9cb72431.js";import"./json.df9e51f4.js";import"./Matcher.70cf0eb7.js";import"./TileStore.baddd553.js";import"./FeatureSetReader.05c3770d.js";import"./centroid.f7592ee4.js";import"./visualVariablesUtils.4d700686.js";import"./visualVariablesUtils.7d2b74a4.js";import"./quickselect.c0fda8e0.js";import"./tileUtils.d59684e9.js";import"./schemaUtils.f6f10115.js";import"./CIMSymbolHelper.14bdfaf6.js";import"./Rect.96506681.js";import"./BidiEngine.82513d9e.js";import"./MD5.a7f2b001.js";import"./TileClipper.08c98452.js";import"./FeatureContainer.d3baae06.js";import"./TileContainer.e2ef7d5c.js";import"./Bitmap.8b53ffa8.js";import"./sublayerUtils.70a0c1f5.js";let O=class extends C{renderChildren(e){if(e.drawPhase!==P.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};O=p([m("esri.views.2d.layers.support.HighlightGraphicContainer")],O);var T=O;const q=e=>{let a=class extends e{initialize(){this.exportImageParameters=new S({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,a){const{layer:i}=this;if(!e)return Promise.reject(new c("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const s=this.get("view.scale"),o=[],p=async e=>{const i=0===e.minScale||s<=e.minScale,m=0===e.maxScale||s>=e.maxScale;if(e.visible&&i&&m)if(e.sublayers)e.sublayers.forEach(p);else if(e.popupEnabled){const i=G(e,((e,a)=>t(e,r(a)))(n({},a),{defaultPopupTemplateEnabled:!1}));d(i)&&o.unshift({sublayer:e,popupTemplate:i})}},m=i.sublayers.toArray().reverse().map(p);await Promise.all(m);const l=o.map((async({sublayer:t,popupTemplate:r})=>{await t.load().catch((()=>{}));const i=t.createQuery(),s=d(a)?a.event:null,o=V({renderer:t.renderer,event:s}),n=this.createFetchPopupFeaturesQueryGeometry(e,o);i.geometry=n,i.outFields=await E(t,r);const p=await this._loadArcadeModules(r);return p&&p.arcadeUtils.hasGeometryOperations(r)||(i.maxAllowableOffset=n.width/o),(await t.queryFeatures(i)).features}));return(await u(l)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return f()}};return p([l()],a.prototype,"exportImageParameters",void 0),p([l({readOnly:!0})],a.prototype,"exportImageVersion",null),p([l()],a.prototype,"layer",void 0),p([l()],a.prototype,"suspended",void 0),p([l(h)],a.prototype,"timeExtent",void 0),a=p([m("esri.views.layers.MapImageLayerView")],a),a},_=g.getLogger("esri.views.2d.layers.MapImageLayerView2D");let F=class extends(q(y(w(x)))){constructor(){super(...arguments),this._highlightGraphics=new b}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{j(e)||_.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,a=r>=10.3,i=r>=10;this._bitmapContainer=new v,this.container.addChild(this._bitmapContainer);const s=new I({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new T(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new U({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:a,imageNormalizationSupported:i,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return M(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImage(e,t,r,n({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},a))}};p([l()],F.prototype,"strategy",void 0),p([l()],F.prototype,"updating",void 0),F=p([m("esri.views.2d.layers.MapImageLayerView2D")],F);var A=F;export{A as default};