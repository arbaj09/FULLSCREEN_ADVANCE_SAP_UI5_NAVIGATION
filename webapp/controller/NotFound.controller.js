sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("student.com.sap.training.advancedsapui5.fullscreen.controller.NotFound", {
        getRouter: function() {
          return sap.ui.core.UIComponent.getRouterFor(this);
        },
        onNavBack: function() {
          var oHistory, sPreviousHash;
        
          oHistory = sap.ui.core.routing.History.getInstance();
          sPreviousHash = oHistory.getPreviousHash();
        
          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            this.getRouter().navTo("overview", true /*no history*/);
          }
        }
      });
    }
  );
  