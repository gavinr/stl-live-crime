import{D as p,E as g,V as m,q as n,e as a,n as o,y as l,o as c}from"./index-CvP2eicz.js";import{t as d}from"./highlightReasons-CXdq2fiu.js";import{m as u,u as w}from"./LayerView-ZBvzgzXg.js";import{t as y}from"./GraphicContainer-Dcyjcwiz.js";import{$ as V}from"./GraphicsView2D-Car1R8GH.js";import{t as f}from"./HighlightCounter-BvDFLo7w.js";import"./scaleUtils-C4B-5RuZ.js";import"./Container-7usEb3Vk.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-2j-phIlz.js";import"./AGraphicContainer-CWXv1Ixa.js";import"./TechniqueInstance-DuuGtmwC.js";import"./UpdateTracking2D-BPYWK-zh.js";import"./TurboLine-B5ey-zp8.js";import"./enums-BRqP_wXA.js";import"./earcut-DePPF63i.js";import"./GeometryUtils-DPcAdbQu.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-CeQ9Jpm-.js";import"./Program-BfMV4PqR.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DdAyWLdN.js";import"./constants-D5zmR9t2.js";import"./TileContainer-BmRYZFMn.js";import"./WGLContainer-CFEQLF95.js";import"./ProgramTemplate-BDSzn2Lg.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-C41mmn72.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-D2HoKM7D.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-Cwx9ceRp.js";import"./TimeOnly-C3E0F8I-.js";import"./timeSupport-DNWAiTlT.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BkC1fLIX.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(n);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(r),h=d(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};o([l()],s.prototype,"graphicsView",void 0),s=o([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const ai=s;export{ai as default};
