sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/app/util/formatter"
], function (Controller, formatter) {
    "use strict";
    return Controller.extend("sap.ui.app.controller.Home", {
        formatter: formatter,

        HomeTableBtnOpenMenu: function (oE) {
            var oButton = oE.getSource();

            // create menu only once
            if (!this._menu) {
                this._menu = sap.ui.xmlfragment(
                    "sap.ui.app.view.MenuEventing",
                    this
                );
                this.getView().addDependent(this._menu);
            }

            var eDock = sap.ui.core.Popup.Dock;
            this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
        },
        handleMenuItemPress: function(oE) {
            if(oE.getParameter("item").getSubmenu()) {
                return;
            }
            var  msg = "'" + oE.getParameter("item").getText() + "' pressed";

            alert(msg);
        }


    });
});