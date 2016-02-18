sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.app.controller.LeftPanel", {


        //1----ActionSheet buttons-------------
        ActionSheetDeletePress: function (oE) {

        },
        ActionSheetCancelPress: function (oE) {

        },
        ActionSheetCopyPress: function (oE) {

        },
        ActionSheetCreatePress: function (oE) {

        },
        ActionSheetChangePress: function (oE) {

        },
        //1------------------------------------

        LeftPanelListPress: function (oE) {
            alert();
        },
        LeftPanelFooterButtonPress: function (oE) {
            var oButton = oE.getSource();

            if (!this._actionSheet) {
                this._actionSheet = sap.ui.xmlfragment(
                    "sap.ui.app.view.ActionSheet",
                    this
                );
                this.getView().addDependent(this._actionSheet);
            }

            this._actionSheet.openBy(oButton);
        },
        LeftPanelSearch: function (oE) {
            // add filter for search
            var sQuery = oE.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var oFilter1 = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.Contains, sQuery);
                var oFilter2 = new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,sQuery);
                var oFilter3 = new sap.ui.model.Filter("Category",sap.ui.model.FilterOperator.Contains,sQuery);
                var oFilter4 = new sap.ui.model.Filter("Data",sap.ui.model.FilterOperator.Contains,sQuery);
                var comFilter = new sap.ui.model.Filter([oFilter1,oFilter2,oFilter3,oFilter4]);
            }
            // update list binding
            var oList = this.getView().byId("LeftPanelList");
            var binding = oList.getBinding("items");
            binding.filter(comFilter, "Application");
          }
    });
});

/*
 <Button text="{i18n>Delete}" icon="sap-icon://delete" press="ActionSheetDeletePress"/>
 <Button text="{i18n>Cancel}" icon="sap-icon://undo" press="ActionSheetCancelPress"/>
 <Button text="{i18n>Copy}" icon="sap-icon://add-activity-2" press="ActionSheetCopyPress"/>
 <Button text="{i18n>Create}" icon="sap-icon://add" press="ActionSheetCreatePress"/>
 <Button text="{i18n>Change}" icon="sap-icon://action" press="ActionSheetChangePress"/>
*/

