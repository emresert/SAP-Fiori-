sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast", // Message lib is added
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("JsonModel-TranslatableTexts.controller.App", {

		onInit: function () {
			// declare json data
			var oData = {
				recipient: {
					name: "World"
				}
			};
            // conver json model to new model
			var oModel = new JSONModel(oData);
			// get json data items
			this.getView().setModel(oModel);
		},
		onShowHello : function (){
			MessageToast.show("Hello World"); // send a message with Mesaage Toast
		}
	});
});