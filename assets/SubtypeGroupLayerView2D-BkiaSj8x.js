import{n as a,o as n,w as d,P as u,N as l}from"./index-CvP2eicz.js";import g from"./FeatureLayerView2D-CgF0Oh_L.js";import"./Container-7usEb3Vk.js";import"./highlightReasons-CXdq2fiu.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-2j-phIlz.js";import"./LayerView-ZBvzgzXg.js";import"./scaleUtils-C4B-5RuZ.js";import"./TechniqueInstance-DuuGtmwC.js";import"./UpdateTracking2D-BPYWK-zh.js";import"./TurboLine-B5ey-zp8.js";import"./enums-BRqP_wXA.js";import"./earcut-DePPF63i.js";import"./GeometryUtils-DPcAdbQu.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-CeQ9Jpm-.js";import"./Program-BfMV4PqR.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DdAyWLdN.js";import"./constants-D5zmR9t2.js";import"./TileContainer-BmRYZFMn.js";import"./WGLContainer-CFEQLF95.js";import"./ProgramTemplate-BDSzn2Lg.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-C41mmn72.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-BqspREn6.js";import"./floatRGBA-BRm4F2Cz.js";import"./FeatureCommandQueue-D2HoKM7D.js";import"./HighlightCounter-BvDFLo7w.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-DtM2rr11.js";import"./RefreshableLayerView-7Pn8xMBp.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};