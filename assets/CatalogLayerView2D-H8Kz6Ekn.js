import{V as o,n as r,y as a,o as n}from"./index-CvP2eicz.js";import{m as s,u as l}from"./LayerView-ZBvzgzXg.js";import"./scaleUtils-C4B-5RuZ.js";import"./Container-7usEb3Vk.js";import"./highlightReasons-CXdq2fiu.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-2j-phIlz.js";let i=class extends s(l){constructor(){super(...arguments),this.layerViews=new o}get dynamicGroupLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.footprintLayer)})}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some(e=>e.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([a()],i.prototype,"dynamicGroupLayerView",null),r([a()],i.prototype,"footprintLayerView",null),r([a()],i.prototype,"layerViews",void 0),i=r([n("esri.views.2d.layers.CatalogLayerView2D")],i);const V=i;export{V as default};
