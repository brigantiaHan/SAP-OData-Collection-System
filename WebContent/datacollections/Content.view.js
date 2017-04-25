sap.ui.jsview("datacollections.Content", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf datacollections.Content
	*/ 
	getControllerName : function() {
		return "datacollections.Content";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf datacollections.Content
	*/ 
	createContent : function(oController) {
		var oMatrix = sap.ui.commons.layout.MatrixLayout({
			layoutFixed: false,
			width: '300px',
			columns: 3
		});
		oMatrix.createRow(
				new sap.ui.commons.Button({
					text: "Create",
					width: '100px',
					press: function() {
						oController.create();
					}
				}),
				new sap.ui.commons.Button({
					text: "Edit",
					width: '100px',
					press: function() {
						oController.edit();
					}
				}),
				new sap.ui.commons.Button({
					text: "Delete",
					width: '100px',
					press: function() {
						oController.remove();
					}
				})
		);
		oMatrix.addStyleClass("matrix"); 
		
		
		var oLayout = new sap.ui.layout.form.SimpleForm("formId",{
			title:"Product Maintainance",
			content:[
			         new sap.ui.commons.Label({text:"ID"}),
			         new sap.ui.commons.TextField("id",{width:'200px',editable:false}),
			         
			         new sap.ui.commons.Label({text:"Name"}),
			         new sap.ui.commons.TextField("name",{width:'200px'}),
			         
			         new sap.ui.commons.Label({text:"Description"}),
			         new sap.ui.commons.TextField("description",{width:'200px'}),
			         
			         new sap.ui.commons.Label({text:"Price"}),
			         new sap.ui.commons.TextField("price",{width:'200px'}),

			         new sap.ui.commons.Label({text:"Rating"}),
			         new sap.ui.commons.TextField("rating",{width:'200px'}),
			         
			         new sap.ui.commons.Label({text: "ReleaseDate"}),
			         new sap.ui.commons.TextField("date",{width: '200px', value: "2017-04-22T22:22:22"}),
			         
			         new sap.ui.commons.Label({text:""}),
			         new sap.ui.commons.Button({
			        	text:"Save",
			        	width:"100px",
			        	press: function() {
			        		oController.save()
			        	}
			         })
			         
			]
		});
		
		var oTable = new sap.ui.table.Table("contentTable",{
			visibleRowCount: 7,
			editable: false
		});
		
		var oCtrl = new sap.ui.commons.TextView({text:"{products>ID}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text:"Product ID"}),
			visible:true,
			template:oCtrl
		}));

		var oCtrl = new sap.ui.commons.TextView({text:"{products>Name}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text:"Product Name"}),
			visible:true,
			template:oCtrl
		}));
		
		
		
		var oCtrl = new sap.ui.commons.TextView({text:"{products>Description}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "Product Description"}),
			visible: true,
			template: oCtrl
			
			
		}));
		
		var oCtrl = new sap.ui.commons.TextView({text:"{products>Price}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "Product Price"}),
			visible: true,
			template: oCtrl
			
			
		}));
		
		oTable.bindRows("products>/Products");
		
		var oText = new sap.ui.commons.TextView({
			wrapping : true,
			text:"OData Link from: http://services.odata.org/OData/OData.svc/",
			semanticColor:sap.ui.commons.TextViewColor.Critical
		});
		var ele = [oMatrix,oLayout,oTable,oText];
		return ele;
	}

});
