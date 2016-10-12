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
		/*return new sap.m.Page({
			title: "Title",
			content: [
			]
		});*/
		/*var aData;
		jQuery.ajax({
			type: "GET",
			url: "/aziendasuperfiga/mainPKG/XS/Service/GPSTrack.xsodata/GPSTrack?$format=json",
			dataType: 'json',
			async: false,
			success: function(data) {
				aData = data.d.results;
			}
		});*/
		/*var oModel;
		oModel = new sap.ui.model.odata.ODataModel("https://aziendasuperfigp1942218403tria.hanatrial.ondemand.com/mainPKG/XS/Service/GPSTrack.xsodata/",false);
		oModel.setHeaders({"content-type" : "application/json;charset=UTF-8"});*/
<<<<<<< Upstream, based on 395ccf49e812e3a2848da279f8f795dc5383ae31
		var sUrl = "/aziendasuperfiga/mainPKG/XS/Service/GPSTrack.xsodata/";
		var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
		sap.ui.getCore().setModel(oModel);
=======
>>>>>>> face2b7 la mappa non va kappa
		var marker;
		var map;
		var oMat = new sap.ui.commons.TextView().bindProperty("text", "MAT");
		var oLat = new sap.ui.commons.TextView().bindProperty("text", "LAT");
		var oLong = new sap.ui.commons.TextView().bindProperty("text", "LONG");

		
		map	 = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 45.4628328,
				lng: 9.107692
			},
			scrollwheel: true,
			zoom: 8
		});
		

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

		var oColumn2 = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "LONGITUDE"
			}),
			template: oLong,
			width: "100px"
		});
		oTable.addColumn(oColumn2);

		var oColumn3 = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "Matricola"
			}),
			template: oMat,
			width: "100px"
		});
		oTable.addColumn(oColumn3);

		//oModel = new sap.ui.model.json.JSONModel();
		/*oModel.setData({
			modelData: aData
		});*/
		oTable.setModel(oController.oModel);

		//oTable.setModel(oModel);
		oTable.bindRows("/GPSTrack");

		oTable.sort(oTable.getColumns()[3]);

		/*	function setMarker(lat, long) {
			var oPosition = new google.maps.LatLng(lat, long);
			marker = new google.maps.Marker({
				position: oPosition,
				map: map
			});
<<<<<<< Upstream, based on 395ccf49e812e3a2848da279f8f795dc5383ae31
		}*/
=======
		}

		*/
>>>>>>> face2b7 la mappa non va kappa
		oTable.attachRowSelectionChange(function(oEvent) {
			var currentRowContext = oEvent.getParameter("rowContext");
<<<<<<< Upstream, based on 395ccf49e812e3a2848da279f8f795dc5383ae31
			var long = oModel.getProperty("LONG", currentRowContext);
			var lat = oModel.getProperty("LAT", currentRowContext);
			oController.setMarker(lat, long, map, marker);
=======
			var Long = oController.oModel.getProperty("LONG", currentRowContext);
			var Lat = oController.oModel.getProperty("LAT", currentRowContext);
			map.setMarker(Lat, Long, map, marker);
>>>>>>> face2b7 la mappa non va kappa
		});

<<<<<<< Upstream, based on 395ccf49e812e3a2848da279f8f795dc5383ae31
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 45.4628328,
				lng: 9.107692
			},
			scrollwheel: true,
			zoom: 8

		});
		/*debugger;
		var oData = new sap.ui.model.json.JSONModel();
		oData.setData({
			modelData: oModel
		});

		var longi;
		longi = oData[0].LAT;
		debugger;
		/*for (var i = 0; i < Object.keys(oModel).length; i++) {
			debugger;
			var longi = oModel[i].LONG;
			var lati = oModel[i].LAT;
			oController.setMarker(lati, longi, map, marker);
			debugger;
=======
		/*	function setMarkerLoop() {
			for (var i = 0; i < Object.keys(aData).length; i++) {
				longi = aData[i].LONG;
				lati = aData[i].LAT;
				setMarker(lati, longi);
			}
		}*//*
		marker = new google.maps.Marker({position: null,
    map: map});
			setMarkerLoop();
>>>>>>> face2b7 la mappa non va kappa
		}*/
		/*marker = new google.maps.Marker({position: null,
    map: map});*/
		return oTable;
	}
});
