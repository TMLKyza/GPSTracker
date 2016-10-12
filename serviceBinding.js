function initModel() {
	var sUrl = "/aziendasuperfiga/mainPKG/XS/Service/GPSTrack.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}