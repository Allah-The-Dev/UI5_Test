/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5_test_project_namespace/ui5_test_project/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});