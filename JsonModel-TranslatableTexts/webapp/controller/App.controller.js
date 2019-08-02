sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast", // Message lib is added
	"sap/ui/model/json/JSONModel", // it is for JSON Model
	"sap/ui/model/resource/ResourceModel" 
], function (Controller, MessageToast, JSONModel, ResourceModel) {
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
			// set data for i18n view
			var i18nModel = new ResourceModel({
				bundleName : "JsonModel-TranslatableTexts.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		
		onShowHello : function (){
			// read ms from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg =oBundle.getText("HelloMsg", [sRecipient]);
			// display message
			MessageToast.show(sMsg); // send a message with Mesaage Toast
		}
	});
});