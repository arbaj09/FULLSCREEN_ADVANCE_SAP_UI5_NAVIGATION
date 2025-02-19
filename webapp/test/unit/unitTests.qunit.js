/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"studentcomsaptrainingadvanced_sapui5/fullscreen/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
