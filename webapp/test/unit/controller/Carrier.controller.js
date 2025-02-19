/*global QUnit*/

sap.ui.define([
	"studentcomsaptrainingadvanced_sapui5/fullscreen/controller/Carrier.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Carrier Controller");

	QUnit.test("I should test the Carrier controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
