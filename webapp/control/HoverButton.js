sap.ui.define([
    "sap/m/Button"
  ], function (Button) {
    "use strict";
  
    return Button.extend("student.com.sap.training.advancedsapui5.fullscreen.control.HoverButton", {
      metadata: {
        properties: {
          "allowHover": {
            type: "boolean",
            defaultValue: false
          },
          "hoverText": {
            type: "string"
          }
        },
        events: {
          "hover": {}
        }
      },
  
      onmouseover: function (evt) {
        // Hover event logic will be added 
        if(this.getAllowHover()){
            this.fireHover();
        } 
      },
   renderer: {}
    });
  });
  