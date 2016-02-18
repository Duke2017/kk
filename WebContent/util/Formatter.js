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
			}
		};

		return Formatter;
},true);