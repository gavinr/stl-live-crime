import{ar as i,at as e}from"./vendor.6e209a4d.js";import{n as t}from"./BitmapTileContainer.ccaaa2c6.js";const a=a=>{let r=class extends a{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new t(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return r=i([e("esri.views.2d.layers.BitmapTileLayerView2D")],r),r};export{a as r};
