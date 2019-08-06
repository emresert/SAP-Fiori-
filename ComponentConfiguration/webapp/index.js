sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "ComponentConfiguration",
		settings : {
			id : "Component" // walkthroug
		},
		async: true
	}).placeAt("content");
});
