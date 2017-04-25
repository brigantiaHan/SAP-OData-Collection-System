sap.ui.controller("datacollections.Person", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf datacollections.Person
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel("http://services.odata.org/OData/OData.svc/Persons?$format=json");
		//make the oModel globally
		sap.ui.getCore().setModel(oModel,"people");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf datacollections.Person
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf datacollections.Person
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf datacollections.Person
*/
//	onExit: function() {
//
//	}

});