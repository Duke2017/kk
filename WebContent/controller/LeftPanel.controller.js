sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("sap.ui.app.controller.LeftPanel", {


        //1----Segmented buttons-------------
        LeftPanelActiveBtn: function (oE) {
            var oFilter1 = new Filter("STATUS", FilterOperator.Contains, "01");
            var oFilter2 = new Filter("STATUS", FilterOperator.Contains, "02");
            var comFilter = new Filter([oFilter1,oFilter2]);
            // update list binding
            var oList = this.getView().byId("LeftPanelList");
            var binding = oList.getBinding("items");
            binding.filter(comFilter, "Application");
        },
        LeftPanelCompleteBtn: function (oE) {
            var oFilter = new Filter("STATUS", FilterOperator.Contains, "03");
            // update list binding
            var oList = this.getView().byId("LeftPanelList");
            var binding = oList.getBinding("items");
            binding.filter(oFilter, "Application");
        },
        //1------------------------------------
        //2----ActionSheet buttons-------------
        ActionSheetDeletePress: function (oE) {
            var dialog = new sap.m.Dialog({
                title: "{i18n>InformationDialogTitle}",
                type: 'Message',
                content: new sap.m.Text({
                    text:  '{i18n>InformationDialogTextDelete}'
                }),
                beginButton: new sap.m.Button({
                    text: '{i18n>InformationDialogYes}',
                    press: function () {
                        dialog.close();
                    }
                }),
                endButton: new sap.m.Button({
                    text: '{i18n>InformationDialogNo}',
                    press: function () {
                        dialog.close();
                    }
                }),
                afterClose: function() {
                    dialog.destroy();
                }
            });
            var i18nModel = new sap.ui.model.resource.ResourceModel({
                bundleUrl : "i18n/i18n.properties"
            });
            dialog.setModel(i18nModel, "i18n");

            dialog.open();
        },
        ActionSheetCancelPress: function (oE) {
            var dialog = new sap.m.Dialog({
                title: "{i18n>InformationDialogTitle}",
                type: 'Message',
                content: new sap.m.Text({
                    text:  '{i18n>InformationDialogTextCancel}'
                }),
                beginButton: new sap.m.Button({
                    text: '{i18n>InformationDialogYes}',
                    press: function () {
                        dialog.close();
                    }
                }),
                endButton: new sap.m.Button({
                    text: '{i18n>InformationDialogNo}',
                    press: function () {
                        dialog.close();
                    }
                }),
                afterClose: function() {
                    dialog.destroy();
                }
            });
            var i18nModel = new sap.ui.model.resource.ResourceModel({
                bundleUrl : "i18n/i18n.properties"
            });
            dialog.setModel(i18nModel, "i18n");

            dialog.open();
        },
        ActionSheetCopyPress: function (oE) {

        },
        ActionSheetCreatePress: function (oE) {

        },
        ActionSheetChangePress: function (oE) {

        },
        //2------------------------------------

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
                var oFilter1 = new Filter("Status", FilterOperator.Contains, sQuery);
                var oFilter2 = new Filter("Name",FilterOperator.Contains,sQuery);
                var oFilter3 = new Filter("Category",FilterOperator.Contains,sQuery);
                var oFilter4 = new Filter("Data",FilterOperator.Contains,sQuery);
                var comFilter = new Filter([oFilter1,oFilter2,oFilter3,oFilter4]);
            }
            // update list binding
            var oList = this.getView().byId("LeftPanelList");
            var binding = oList.getBinding("items");
            binding.filter(comFilter, "Application");
          },
        onBeforeRendering: function () {
            this.LeftPanelActiveBtn();
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

