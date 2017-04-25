sap.ui.jsview("datacollections.Person", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf datacollections.Person
	*/ 
	getControllerName : function() {
		return "datacollections.Person";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf datacollections.Person
	*/ 
	createContent : function(oController) {
		var oTable = new sap.ui.table.Table("peopleTable",{
			visibleRowCount: 5,
			editable: false
		});
		var oCtrl = new sap.ui.commons.TextView({text:"{people>ID}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text:"ID"}),
			visible:true,
			template:oCtrl
		}));
		
		var oCtrl = new sap.ui.commons.TextView({text:"{people>Name}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "Name"}),
			visible: true,
			template: oCtrl
			
			
		}));
		
		
		
		oTable.bindRows("people>/value");
		var oText = new sap.ui.commons.TextView({
			wrapping : true,
			text:"OData Link from: http://services.odata.org/OData/OData.svc/",
			semanticColor:sap.ui.commons.TextViewColor.Critical
		});
		var ele = [oTable, oText];
		return ele;
	}

});
