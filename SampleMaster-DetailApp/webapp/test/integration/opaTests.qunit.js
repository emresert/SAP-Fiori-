/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"Northwind/SampleMaster-DetailApp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});