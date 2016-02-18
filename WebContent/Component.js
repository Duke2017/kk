sap.ui.define('sap.ui.app.Component', ['sap/ui/core/UIComponent'], function(UIComponent) {
	"use strict";

	return UIComponent.extend('sap.ui.app.Component', {
		metadata: {
			includes : ["css/style.css"],
			routing: {
				config: {
					routerClass: sap.ui.core.routing.Router,
					viewType: "XML",
					viewPath: "sap.ui.app.view",
					controlId: "splitApp",
					bypassed: {
						target: ["LeftPanel" , "Home"]
					}
				},
				routes: [
				],
				targets: {
					Home: {
						viewName: "Home",
						controlAggregation: "detailPages"
					},
					LeftPanel: {
						viewName: "LeftPanel",
						controlAggregation: "masterPages"
					}
				}
			}
		},

		init: function () {
			var rootPath = jQuery.sap.getModulePath("sap.ui.app");
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl : [rootPath, "i18n/i18n.properties"].join("/")
			});
			this.setModel(i18nModel, "i18n");

			// call overwritten init (calls createContent)
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("parameters.json");
			this.setModel(oModel);
			sap.ui.getCore().setModel(oModel, "Model");


			this._router = this.getRouter();
		//	this._router.getTargets().display("Home");
			// initialize the router
			this._router.initialize();
		},

		createContent: function () {
			// create root view
			return sap.ui.view({
				viewName: "sap.ui.app.view.App",
				type: "XML"
			});
		}
	});

});
