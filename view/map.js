var map;


function setMarker(lat, long, map, marker) {
	var oPosition = new google.maps.LatLng(lat, long);
	 marker = new google.maps.Marker({
		position: oPosition,
		map: map
	});
}

function getMap () {
	return map;
}