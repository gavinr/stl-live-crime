import{ar as e,as as i,at as a,J as r}from"./vendor.982f672a.js";import{Z as s}from"./FeatureLayerView2D.a187b685.js";import"./clickToleranceUtils.bcc7d4ae.js";import"./definitions.8ca8ae21.js";import"./LayerView.e2b523cc.js";import"./Container.5bdf9f13.js";import"./mat4f32.9c1247c6.js";import"./schemaUtils.b1cb344d.js";import"./Utils.c0a073db.js";import"./Texture.4e30fbdc.js";import"./MaterialKey.35ddb98d.js";import"./visualVariablesUtils.606bef95.js";import"./CIMSymbolHelper.33a317ba.js";import"./Rect.96506681.js";import"./BidiEngine.82513d9e.js";import"./MD5.a7f2b001.js";import"./popupUtils.f5eafde2.js";import"./drapedUtils.2d4e219c.js";const t=s=>{let t=class extends s{initialize(){const{layer:e,view:i}=this;e.source.supportsSpatialReference(i.spatialReference)||this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([i()],t.prototype,"layer",void 0),e([i({readOnly:!0})],t.prototype,"availableFields",null),t=e([a("esri.views.layers.OGCFeatureLayerView")],t),t};let l=class extends(t(s)){};l=e([a("esri.views.2d.layers.OGCFeatureLayerView2D")],l);var o=l;export{o as default};
