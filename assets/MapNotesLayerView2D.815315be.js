import{G as e,j as i,cF as s,ac as t,dd as r,F as a,ar as o,at as n}from"./vendor.6e209a4d.js";import{l as p,d as h}from"./LayerView.e6fb419e.js";import{i as c}from"./GraphicContainer.5d07d3f6.js";import{o as l}from"./BaseGraphicContainer.d203f6ef.js";import"./Container.2fe15eee.js";import"./mat4f32.9c1247c6.js";import"./Utils.ab398aa7.js";import"./Texture.3086c6ff.js";import"./quantizationUtils.9cb72431.js";import"./json.df9e51f4.js";import"./Matcher.70cf0eb7.js";import"./definitions.8ca8ae21.js";import"./TileStore.baddd553.js";import"./FeatureSetReader.05c3770d.js";import"./centroid.f7592ee4.js";import"./visualVariablesUtils.4d700686.js";import"./visualVariablesUtils.7d2b74a4.js";import"./quickselect.c0fda8e0.js";import"./tileUtils.d59684e9.js";import"./schemaUtils.f6f10115.js";import"./MaterialKey.a25e277c.js";import"./CIMSymbolHelper.14bdfaf6.js";import"./Rect.96506681.js";import"./BidiEngine.82513d9e.js";import"./MD5.a7f2b001.js";import"./GeometryUtils.c1792d3b.js";import"./earcut.b5c0cad1.js";import"./TileClipper.08c98452.js";import"./VertexArrayObject.59d5ee02.js";import"./FeatureContainer.d3baae06.js";import"./TileContainer.e2ef7d5c.js";import"./WGLContainer.e0524ef7.js";import"./ShaderCompiler.b1ea523b.js";import"./config.042ea55e.js";const d="sublayers",u="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let m=class extends(p(h)){async fetchPopupFeatures(e){return(await Promise.all(Array.from(this.graphicsViews(),(i=>i.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){e(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():e(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,s){if(this.suspended)return null;const t=Array.from(this.graphicsViews(),(async t=>{const r=await t.hitTest(i,s);if(r){if(e(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(t);!r.popupTemplate&&e.popupTemplate&&(r.popupTemplate=e.popupTemplate)}return r}return null}));return(await Promise.all(t)).filter((e=>!!e))[0]||null}highlight(e){let t;if("number"==typeof e?t=[e]:e instanceof i?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):s.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),!t.length)return f;for(const i of this.graphicsViews())i.addHighlight(t);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t)}}}update(e){for(const i of this.graphicsViews())i.processUpdate(e)}attach(){const i=this.view,s=()=>this.requestUpdate(),a=this.layer.featureCollections;if(e(a)&&a.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const e of a){const r=new c(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new l({view:i,graphics:e.source,renderer:e.renderer,requestUpdateCallback:s,container:r});this._graphicsViewsFeatureCollectionMap.set(a,e),this.container.addChild(a.container),this.handles.add([t(e,"visible",(e=>a.container.visible=e)),t(a,"updating",(()=>this.notifyChange("updating")))],u)}}else e(this.layer.sublayers)&&this.handles.add(r(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(u);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),a(this.layer.sublayers))return;const e=[],i=this.view,s=()=>this.requestUpdate();for(const r of this.layer.sublayers){const a=new c(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const o=new l({view:i,graphics:r.graphics,requestUpdateCallback:s,container:a});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),t(r,"visible",(e=>o.container.visible=e)),t(o,"updating",(()=>this.notifyChange("updating")))],u),this.container.addChild(o.container),e.push(o)}this._graphicsViews=e}};m=o([n("esri.views.2d.layers.MapNotesLayerView2D")],m);var g=m;export{g as default};