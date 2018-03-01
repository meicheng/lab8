function initMap() {
	// add your code here
    var ucsd_ltling = {lat:32.880, lng:-117.236};

	var map = new google.maps.Map(documnt.getElementById('map'), {
		center: ucsd_ltling,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltling,
		map: map,
		title: "UCSD"
	});
}