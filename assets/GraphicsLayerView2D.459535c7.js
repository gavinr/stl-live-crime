import{j as e,cF as i,ar as t,as as r,at as s}from"./vendor.6e209a4d.js";import{l as a,d as p}from"./LayerView.e6fb419e.js";import{i as o}from"./GraphicContainer.5d07d3f6.js";import{o as h}from"./BaseGraphicContainer.d203f6ef.js";import"./Container.2fe15eee.js";import"./mat4f32.9c1247c6.js";import"./Utils.ab398aa7.js";import"./Texture.3086c6ff.js";import"./quantizationUtils.9cb72431.js";import"./json.df9e51f4.js";import"./Matcher.70cf0eb7.js";import"./definitions.8ca8ae21.js";import"./TileStore.baddd553.js";import"./FeatureSetReader.05c3770d.js";import"./centroid.f7592ee4.js";import"./visualVariablesUtils.4d700686.js";import"./visualVariablesUtils.7d2b74a4.js";import"./quickselect.c0fda8e0.js";import"./tileUtils.d59684e9.js";import"./schemaUtils.f6f10115.js";import"./MaterialKey.a25e277c.js";import"./CIMSymbolHelper.14bdfaf6.js";import"./Rect.96506681.js";import"./BidiEngine.82513d9e.js";import"./MD5.a7f2b001.js";import"./GeometryUtils.c1792d3b.js";import"./earcut.b5c0cad1.js";import"./TileClipper.08c98452.js";import"./VertexArrayObject.59d5ee02.js";import"./FeatureContainer.d3baae06.js";import"./TileContainer.e2ef7d5c.js";import"./WGLContainer.e0524ef7.js";import"./ShaderCompiler.b1ea523b.js";import"./config.042ea55e.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let r;return"number"==typeof t?r=[t]:t instanceof e?r=[t.uid]:Array.isArray(t)&&t.length>0?r="number"==typeof t[0]?t:t.map((e=>e&&e.uid)):i.isCollection(t)&&(r=t.map((e=>e&&e.uid)).toArray()),r=r.filter((e=>null!=e)),r.length?(this.graphicsView.addHighlight(r),{remove:()=>this.graphicsView.removeHighlight(r)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"updating",void 0),n=t([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var d=n;export{d as default};
