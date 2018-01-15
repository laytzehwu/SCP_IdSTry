sap.ui.define([
	"sap/ui/base/Object"
], function (UI5Object) {
	return UI5Object.extend("IdTry.controller.IDDialog", {
		constructor : function (oView) {
			this._oView = oView;
		},
		
		open: function () {
			var oView = this._oView;
			var oDialog = oView.byId("idDialog");
			// create dialog lazily
			if (!oDialog) {
				var oFragmentController = {
					onCloseDialog : function () {
						oDialog.close();
					}
				};
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "IdTry.controller.IDDialog", oFragmentController);
				// connect dialog to the root view of this component (models, lifecycle)
				oView.addDependent(oDialog);
				// forward compact/cozy style into dialog
				jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
			}
			oDialog.open();
		}
		
	});
});