import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import domClass from 'dojo/dom-class';
import domConstruct from 'dojo/dom-construct';

export default declare([_WidgetBase], {
  postCreate() {
    this.inherited(arguments);
    this.domNode = domConstruct.toDom('<div class="loading hide"><div class="spinner"></div></div>');
    domConstruct.place(this.domNode, document.body, 'last');
  },
  show() {
    domClass.remove(this.domNode, 'hide');
  },

  hide() {
    domClass.add(this.domNode, 'hide');
  }
});
