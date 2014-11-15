var map = L.map('map').setView([61.46006, 23.78664], 14);

function renderBusMap () {

	L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
		id: 'examples.map-i875mjb7'
	}).addTo(map);
	
}


function renderBusStops () {
	L.marker([61.46576, 23.79500]).addTo(map);

	L.circle([61.45463, 23.7719], 20, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.2
	}).addTo(map).bindPopup("Bussin 33 paatepysakki 3167 IKEAlla");

	L.circle([61.46888, 23.79169], 10, {
		color: 'blue',
		fillColor: '#00f',
		fillOpacity: 0.2
	}).addTo(map).bindPopup("Pysakki 3045 Nirvankadulla kentan kohdalla");

	L.circle([61.46554, 23.79419], 10, {
		color: 'blue',
		fillColor: '#00f',
		fillOpacity: 0.2
	}).addTo(map).bindPopup("Lahin pysakki 3105 Nirvankadulla");		

	L.circle([61.47757, 23.83982], 20, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.2
	}).addTo(map).bindPopup("Bussin 21 lahtopysakki 3563 Turtolassa");
}


function renderRoute33 () {

	var ikealtaMeille = [
		L.latLng(61.45463, 23.7719), //33 paatepysakki
		L.latLng(61.45481, 23.77993), // liikenneympyr? Ikeasta
		L.latLng(61.45728, 23.7834),// Automiehenkatu - Sarkijarvenkatu
		L.latLng(61.45811, 23.78572), // Automiehenkatu - Tuotekatu 
		L.latLng(61.45957, 23.78389), // Tuotekadulla 
		L.latLng(61.46022, 23.78033), // Tuotekadulla  - Sarkijarvenkatu
		L.latLng(61.46361, 23.78386), // Kurssarin mutka
		L.latLng(61.46269, 23.7863), // Kaantyy Nirvansuonkadulle
		L.latLng(61.46564, 23.78918), // Kaantyy Nirvankadulle
		L.latLng(61.46513, 23.79143), // Nirvankadulla mutkaa
		L.latLng(61.46523, 23.79348), // Nirvankadulla mutkaa
		L.latLng(61.46573, 23.79435) // Meidan risteyksen kohdalla
	];
	var polyline = L.polyline(ikealtaMeille, {
		color: 'orange',
		opacity:0.3,
		weight: 10
	}).addTo(map);		
	
	

	L.polygon([
				[61.46340, 23.78607],
				[61.46308, 23.78751],
				[61.46297, 23.78742],
				[61.46328, 23.78599]
			],
			{
				color: 'red',
				opacity:0.3,
				weight: 5,
				fill: false
			})
			.addTo(map).bindPopup("Viela ehtii nopeasti 33 pysakille");

}

function renderRoute21 () {

	var turtolastaMeille = [
		L.latLng(61.47757, 23.83982), //21 lahtopysakki Turtolassa
		L.latLng(61.47785, 23.84128), // Turtolassa
		L.latLng(61.47848, 23.84117), // Turtolassa
		L.latLng(61.47891, 23.83653), // Turtolassa
		L.latLng(61.47917, 23.82763), // Kaantyy Hallilantielle
		L.latLng(61.47692, 23.82707), //  Hallilantie
		L.latLng(61.47533, 23.826  ), //  Hallilantie
		L.latLng(61.47414, 23.82463), //  Hallilantie
		L.latLng(61.47347, 23.82263), //  Hallilantie
		L.latLng(61.4732 , 23.82009), //  Hallilantie Loukkaankadun risteys
		L.latLng(61.47305, 23.81673), //  Hallilantie 
		L.latLng(61.4732 , 23.81346), //  Hallilantielta kaantyy Veisunkadulle 
		L.latLng(61.47179, 23.81278), //  Veisunkadulla
		L.latLng(61.47135, 23.81272), //  Veisunkadulla
		L.latLng(61.47052, 23.81274), //  Veisunkadulla
		L.latLng(61.47012, 23.81271), //  Veisunkadulla
		L.latLng(61.46862, 23.81189), //  Veisunkadulla
		L.latLng(61.46813, 23.81129), //  Veisunkadulla
		L.latLng(61.46654, 23.80834), //  Veisunkadulla
		L.latLng(61.46618, 23.80715), //  Veisunkadulla
		L.latLng(61.46597, 23.80589), //  Veisunkadulla
		L.latLng(61.46598, 23.80468), //  Veisunkadulla
		L.latLng(61.46609, 23.80336), //  Veisunkadulla leikkikentan kohdalla
		L.latLng(61.46687, 23.79968), //  Veisunkadulla Siwan nurkalla
		L.latLng(61.46698, 23.79802), //  Veisunkadulla 
		L.latLng(61.46739, 23.79583), //  Veisunkadulla 
		L.latLng(61.46791, 23.79385), //  Veisunkadulla  Nirvankadun terava risteys
		L.latLng(61.4684 , 23.79305), //  Nirvankadulla kentan nurkalla			
		L.latLng(61.46898, 23.79111) //Nirvankadulla kentan kohdalla
	];
	var polyline = L.polyline(turtolastaMeille, {
		color: 'purple',
		opacity:0.15,
		weight: 10
	}).addTo(map);


	L.polygon([
				[61.47365, 23.81711],
				[61.47253, 23.81719],
				[61.47252, 23.8165],
				[61.47365, 23.81642]
				], 
				{
					color: 'red',
					opacity:0.3,
					weight: 5,
					fill: false
				})
				.addTo(map).bindPopup("Viela ehtii nopeasti 21 pysakille");

}
			
// -----------------------------------------			
				
			

function renderBusPosition(bussi) {
	var latlng = bussi.getLatLng();
	//bussi.setLatLng( L.latLng(61.47135, 23.81272) );
	bussi.setLatLng( L.latLng(latlng.lat-0.0001, latlng.lng-0.0001) );
}

var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
}

function onMapClick2(e) {
	// Testing icons. See http://leafletjs.com/reference.html#divicon
	var busIcon = L.divIcon({
		className:'leaflet-div-icon',
		iconSize: [20,20],
		html: '33'
	});
	var busIcon21 = createHTMLicon('21');
	L.marker([61.45701, 23.78500], {icon:busIcon}).addTo(map);			
	L.marker([61.45701, 23.78800], {icon:busIcon21}).addTo(map);			
}

map.on('click', onMapClick2);

function createHTMLicon (htmlOrText) {
	return L.divIcon({
		className:'bus-icon',
		iconSize: [20,20],
		html: htmlOrText
	});
}



var interval1;
function start_auto_refresh() {
	var intervalsetting = parseInt(document.getElementById("intervalsetting").value)*1000;
	if (intervalsetting === 0) {
		console.log("Stopping updates");
		clearInterval(interval1);
	} else {
		console.log("Starting update every ", intervalsetting, "ms");
		interval1 = setInterval( function(){
				getAndUpdateBusPositions()
			}, intervalsetting ); //Calls that fn every xxx ms
		}
}


//-----------------------------------------

// http://wiki.itsfactory.fi/index.php/Journeys_API#Vehicle_Activity
// http://data.itsfactory.fi/journeys/api/1/vehicle-activity/?lineRef=21&callback=?

// var url = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity/'

//var url = 'http://localhost:8080/bus_data.json'
var url = 'http://localhost:8080/get_buses'

// var url = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity/?lineRef=21&callback=?'

function getAndUpdateBusPositions() {

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		console.log('xmlhttp.onreadystatechange');
		console.log(xmlhttp);
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log('xmlhttp.responseText len=',xmlhttp.responseText.length);
			if (xmlhttp.responseText != '') {
				var myData = JSON.parse(xmlhttp.responseText);
				returnDataHandler(myData);
			}
		}
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}


function returnDataHandler(data) {
	//console.log(data);
	for (i=0; i<data.body.length; i++) {
		//Now we replace the timestamp DIV for every bus. 
		//Do something more sensible...
		var timestamp = data.body[i].recordedAtTime;
		console.log('timestamp:',timestamp);
		if (timestamp) {
			var timediv = document.getElementById('timestamp');
			timediv.innerHTML = timestamp;
		}
		
		var loc = data.body[i].monitoredVehicleJourney.vehicleLocation
		var lat = parseFloat(loc.latitude);
		var lng = parseFloat(loc.longitude);
		console.log(lat,lng);
		
		
		L.circleMarker([lat,lng], {
			color: 'black',
			opacity: 0.2,
			fillColor: 'lightyellow',
			fillOpacity: 0.2
		}).addTo(map)
		
		//L.circle([61.47757, 23.83982], 20, {
		//	color: 'red',
		//	fillColor: '#f03',
		//	fillOpacity: 0.2
		//}).addTo(map).bindPopup("sirkkeli");
		
	}
}

renderBusMap();
renderBusStops();
renderRoute21();
renderRoute33();

getAndUpdateBusPositions();

