/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"assign03/Assignment03/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});