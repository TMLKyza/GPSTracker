sap.ui.jsview("GPSTracker.view.gpsTracker", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf GPSTracker.view.gpsTracker
	 */
	getControllerName: function() {
		return "GPSTracker.view.gpsTracker";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf GPSTracker.view.gpsTracker
	 */
	createContent: function(oController) {
		var aData;
		$.ajax({
			type: "GET",
			url: "https://aziendasuperfigp1942218403tria.hanatrial.ondemand.com/mainPKG/XS/Service/GPSTrack.xsodata/GPSTrack?$format=json",
			dataType: 'json',
			async: false,
			success: function(data) {
				aData = data.d.results;
			}
		});
		var oMat = new sap.ui.commons.text().bindProperty("text","MAT");
		var oLat = new sap.ui.commons.TextView().bindProperty("text", "LAT");
		var oLong = new sap.ui.commons.TextView().bindProperty("text", "LONG");

		var oTable = new sap.ui.table.Table({
			title: "ULU",
			visibleRowCount: 7,
			selectionMode: sap.ui.table.SelectionMode.Single
		});

		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "LATITUDINE"
			}),
			template: oLat,
			width: "100px"
		});
		oTable.addColumn(oColumn);
		
		
var oModel = new sap.ui.model.json.JSONModel(); 
oModel.setData({modelData: aData});
oTable.setModel(oModel);
oTable.bindRows("/modelData");


oTable.sort(oTable.getColumns()[3]);

	}

});