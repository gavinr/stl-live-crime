import{w as l,P as n,z as g,V as w,A as f,B as d,C as h,n as u,o as V}from"./index-CvP2eicz.js";import{m as b,u as S}from"./LayerView-ZBvzgzXg.js";import{t as _}from"./GraphicContainer-Dcyjcwiz.js";import{$ as T}from"./GraphicsView2D-Car1R8GH.js";import"./scaleUtils-C4B-5RuZ.js";import"./Container-7usEb3Vk.js";import"./highlightReasons-CXdq2fiu.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-2j-phIlz.js";import"./AGraphicContainer-CWXv1Ixa.js";import"./TechniqueInstance-DuuGtmwC.js";import"./UpdateTracking2D-BPYWK-zh.js";import"./TurboLine-B5ey-zp8.js";import"./enums-BRqP_wXA.js";import"./earcut-DePPF63i.js";import"./GeometryUtils-DPcAdbQu.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-CeQ9Jpm-.js";import"./Program-BfMV4PqR.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DdAyWLdN.js";import"./constants-D5zmR9t2.js";import"./TileContainer-BmRYZFMn.js";import"./WGLContainer-CFEQLF95.js";import"./ProgramTemplate-BDSzn2Lg.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-C41mmn72.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-D2HoKM7D.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-Cwx9ceRp.js";import"./TimeOnly-C3E0F8I-.js";import"./timeSupport-DNWAiTlT.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BkC1fLIX.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},n),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new h({symbol:e})},n),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new h({symbol:e})},n),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new h({symbol:e})},n)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const le=y;export{le as default};