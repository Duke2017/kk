sap.ui.define([],
	function () {
		"use strict";

		var Formatter = {
			successionHeaderFactory: function (oGroup){
				var oTitle;
				switch (oGroup.key){
					case '1':
						oTitle = '{i18n>HomeTableLineLeaders}';
						break;
					case '2':
						oTitle = '{i18n>HomeTableFuncLeaders}';
						break
				}
				return new sap.m.GroupHeaderListItem( {
					title: oTitle,
					upperCase: false
				} )
			},
			PanelText: function (sText){
				var oModel = sap.ui.getCore().getModel("Model");
				var oData = oModel.getData();
				console.log('oModel=', oModel);
				console.log('oData', oData);
				console.log('prop=', oModel.getProperty("/RM_ROLE"));

				return sText+" (666)"
			}
		};

		return Formatter;
},true);
