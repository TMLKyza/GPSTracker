sap.ui.controller("GPSTracker.view.gpsTracker", {
<<<<<<< Upstream, based on 395ccf49e812e3a2848da279f8f795dc5383ae31

	setMarker: function(lat, long, map, marker) {
			var oPosition = new google.maps.LatLng(lat, long);
			marker = new google.maps.Marker({
				position: oPosition,
				map: map
			});
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf GPSTracker.view.gpsTracker
		 */
		//	onInit: function() {
		//
		//	},
=======
	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf GPSTracker.view.gpsTracker
	 */

	onInit: function() {
		var sUrl = "/aziendasuperfiga/mainPKG/XS/Service/GPSTrack.xsodata/";
		var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
		sap.ui.getCore().setModel(oModel);
	}
>>>>>>> face2b7 la mappa non va kappa

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf GPSTracker.view.gpsTracker
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf GPSTracker.view.gpsTracker
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf GPSTracker.view.gpsTracker
	 */
	//	onExit: function() {
	//
	//	}

});
