sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("student.com.sap.training.advancedsapui5.fullscreen.controller.Flights", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("flights").attachMatched(this._onObjectMatched, this);

        },
        
    getRouter: function () {
         return sap.ui.core.UIComponent.getRouterFor(this);
        }  ,
    _onObjectMatched: function (oEvent) {

        //Retrieve the parameter with the name arguments from the event object. Assign it to a variable called oArgs. Add the following code to the function:

        var oArgs = oEvent.getParameter("arguments");
        //Read the property carrierId from the oArgs object and assign the result to a member variable called _sCarrierId
        this._sCarrierId = oArgs.carrid;

        // Get a reference to the view object and assign the reference to a local variable called oView
        var oView = this.getView();
          //Call the function bindElement on the view object. Pass a literal object to the function.
          oView.bindElement({
            // Add the property path to the literal object and assign the binding to the selected Carrier using the _sCarrierId variable.
            path: "/UX_C_Carrier_TP('" + this._sCarrierId + "')",

            events: {

                change: this._onBindingChange.bind(this),
                
               dataRequested: function () {
                               oView.setBusy(true);
                         },

                         
              dataReceived: function () {
                     oView.setBusy(false);
                         }

            }

        });


        },
        
_onBindingChange: function () {
    var oElementBinding;
  
    oElementBinding = this.getView().getElementBinding();
  
    // No data for the binding 
    if (oElementBinding && !oElementBinding.getBoundContext()) {
      this.getRouter().getTargets().display("notFound");
    }
  },
  
onNavBack: function () {
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
});
