import{ar as e,at as t,c_ as s,as as i,cz as r,c$ as a,cn as n,bn as o,cF as l,d0 as p,ac as d,ao as h,bi as u,d1 as y,a3 as c,ap as v,I as g}from"./vendor.6e209a4d.js";import{r as w}from"./Container.2fe15eee.js";let m=class extends s{};m=e([t("esri.views.layers.support.ClipArea")],m);var b,f=m;let R=b=class extends f{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new b({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};e([i({type:[Number,String],json:{write:!0}})],R.prototype,"left",void 0),e([i({type:[Number,String],json:{write:!0}})],R.prototype,"right",void 0),e([i({type:[Number,String],json:{write:!0}})],R.prototype,"top",void 0),e([i({type:[Number,String],json:{write:!0}})],R.prototype,"bottom",void 0),e([i({readOnly:!0})],R.prototype,"version",null),R=b=e([t("esri.views.layers.support.ClipRect")],R);var q,O=R;const U={base:a,key:"type",typeMap:{extent:n,polygon:o}};let x=q=class extends f{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new q({geometry:this.geometry.clone()})}};e([i({types:U,json:{read:r,write:!0}})],x.prototype,"geometry",void 0),e([i({readOnly:!0})],x.prototype,"version",null),x=q=e([t("esri.views.layers.support.Geometry")],x);var S=x;let _=class extends f{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};e([i({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),e([i({readOnly:!0})],_.prototype,"version",null),_=e([t("esri.views.layers.support.Path")],_);var j=_;const I=l.ofType({key:"type",base:f,typeMap:{rect:O,path:j,geometry:S}}),N=s=>{let r=class extends s{constructor(){super(...arguments),this.clips=new I,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new w),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([d(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),d(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),d(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),d(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,a=!r;!s&&e<=i&&(s=!0),!a&&e>=r&&(a=!0),t=s&&a}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return e([i({type:I,set(e){const t=p(e,this._get("clips"),I);this._set("clips",t)}})],r.prototype,"clips",void 0),e([i()],r.prototype,"moving",void 0),e([i()],r.prototype,"attached",void 0),e([i()],r.prototype,"container",void 0),e([i()],r.prototype,"suspended",void 0),e([i({readOnly:!0})],r.prototype,"updateParameters",void 0),e([i()],r.prototype,"updateRequested",void 0),e([i()],r.prototype,"updating",null),e([i()],r.prototype,"view",void 0),r=e([t("esri.views.2d.layers.LayerView2D")],r),r};let L=class extends(h(u(y(c.EventedMixin(v))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw g.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};e([i()],L.prototype,"fullOpacity",null),e([i()],L.prototype,"layer",void 0),e([i()],L.prototype,"parent",void 0),e([i({readOnly:!0})],L.prototype,"suspended",null),e([i({readOnly:!0})],L.prototype,"suspendInfo",null),e([i({readOnly:!0})],L.prototype,"legendEnabled",null),e([i({type:Boolean,readOnly:!0})],L.prototype,"updating",null),e([i({readOnly:!0})],L.prototype,"updatingProgress",null),e([i()],L.prototype,"visible",null),L=e([t("esri.views.layers.LayerView")],L);var V=L;export{V as d,N as l};