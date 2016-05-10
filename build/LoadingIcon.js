define(['dojo/_base/declare', 'dijit/_WidgetBase', 'dojo/dom-class', 'dojo/dom-construct'], function (declare, _WidgetBase, domClass, domConstruct) {
  return declare([_WidgetBase], {
    postCreate: function postCreate() {
      this.inherited(arguments);
      this.domNode = domConstruct.toDom('<div class="loading hide"><div class="spinner"></div></div>');
      domConstruct.place(this.domNode, document.body, 'last');
    },
    show: function show() {
      domClass.remove(this.domNode, 'hide');
    },
    hide: function hide() {
      domClass.add(this.domNode, 'hide');
    }
  });
});