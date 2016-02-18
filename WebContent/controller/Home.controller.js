sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/app/util/formatter"
], function (Controller, formatter) {
    "use strict";
    return Controller.extend("sap.ui.app.controller.Home", {
        formatter: formatter,
     handleIconTabBarSelect: function (oEvent) {
      var sKey = oEvent.getParameter("selectedKey");
      var btn1 = this.getView().byId("FooterBtn1");
      var btn2 = this.getView().byId("FooterBtn2");
          if (sKey === "key1") {
           //   if (!btn1.getVisible()) {
                  btn1.setVisible(true);
           //   }
          } else {
              btn1.setVisible(false);
          }
         if (sKey === "key2") {
                 btn2.setVisible(true);
         } else {
             btn2.setVisible(false);
         }

     },

        FooterBtn1Press: function (oEvent) {
            var oButton = oEvent.getSource();

            // create action sheet only once
            if (!this._actionSheet) {
                this._actionSheet = sap.ui.xmlfragment("sap.ui.app.view.ActionSheet",this);
                this.getView().addDependent(this._actionSheet);
            }
            this._actionSheet.openBy(oButton);
        },
        FooterBtn2Press: function () {
            this.getOwnerComponent().ChildDialog.open(this.getView());
        }


    });
});

/*
 {
 "parameters":
 {
 "FullName": "Котов Лев Пантерович",   //ФИО
 "PersonnelNumber": "0200716",   //Табельный номер
 "DateOfBirth": "2000-01-27T00:00:00",   //Дата рождения
 "Citizenship": "РФ",  //Гражданство
 "MaritalStatus": "жен/зм", //Семейное положение
 "DateOfMarriage": "2015-02-26T00:00:00",  //Дата регистрации брака
 "AmountOfChildren": 2,  //Количество детей
 "Email": "meow@gmail.com",   //Электронная почта
 "MobilePhoneNumber": "Н/Д",   //Номер мобильного телефона
 "DateContract": "2013-05-16T00:00:00",  //Дата начала договора
 "DegreeOfEmployment": "99%",    //Степень занятости
 "SectionStaff": "ВУ Ш. \"Воршагорск\"",     //Раздел персонала
 "SubsectionStaff": "ППП/ОснПроиз",  //Подраздел персонала
 "Group": "Штатный работник", //Группа
 "Category": "РуководителиСум",  //Категория
 "History": "История",   //Организационные присвоения (История)
 "OrgUnit": "Производство", //Орг. единица
 "EstablishedPosts": "Начальник производства", //Штатная должность
 "CostCenter": "Адм.-быт комбинат",     //Место возникновения затрат
 "UnitCalculation": "Ш.Воргашор.2"  //Единица расчета
 }
 }
 */