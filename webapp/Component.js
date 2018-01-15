sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"IdTry/model/models",
	"sap/ui/demo/wt/controller/IDDialog"
], function(UIComponent, Device, models, IDDialog) {
	"use strict";

	return UIComponent.extend("IdTry.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			this._idDialog = new IDDialog(this.getRootControl());
		},
		
		openIDDialog : function () {
			this._idDialog.open();
		}
		
	});
});