// index.js should be added by manuel  

sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "JsonModel-TranslatableTexts.view.App" // it should has a correct url to work properly
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
