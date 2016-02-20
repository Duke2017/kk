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
			PanelText: function (sText1, sObj1){
//var sText2 = "" + sObj1.length + sObj2.length + sObj3.length;
				var sText2 = 0;
				if (sObj1) {
					sText2 = sObj1.Organizer.length + sObj1.Chairman.length + sObj1.Leaders.length;
				}
				return sText1 +" (" + sText2 +  ")"
			}
		};

		return Formatter;
},true);