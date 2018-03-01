function initMap() {
	// add your code here
	var map = new google.maps.Map(documnt.getElementById('map'), {
		center: used_ltling,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltling,
		map: map,
		title: "UCSD"
	});
}