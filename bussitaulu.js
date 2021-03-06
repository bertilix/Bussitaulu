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

var lngctr = lngctr || 23.78800;

function onMapClick2(e) {
	// Testing icons. See http://leafletjs.com/reference.html#divicon
	var busIcon = L.divIcon({
		className:'leaflet-div-icon',
		iconSize: [20,20],
		html: '33'
	});
	L.marker([61.45701, 23.78500], {icon:busIcon}).addTo(map);			

	var html = '<div><img src="http://localhost:8080/pics/bussi40.png"></img></div>';
	var busIcon21 = createHTMLicon(20,20,html,'bus-icon-circle');
	L.marker([61.45701, lngctr], {icon:busIcon21}).addTo(map);			

	lngctr += 0.003;
}
	

map.on('click', onMapClick2);

function createHTMLicon (sizex, sizey, htmlOrText, classNames) {
	return L.divIcon({
		className: classNames,   //'bus-icon'
		iconSize: [sizex,sizey],
		html: htmlOrText
	});
}

function createSpeedIcon () {
	return L.divIcon({
		className: 'speed-icon',   //'bus-icon'
		iconSize: [38,38],
		html: 'A'
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

var url = 'http://localhost:8080/get_buses'
//var url = 'http://localhost:8080/get_test_buses'

// var url = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity/?lineRef=21&callback=?'

function getAndUpdateBusPositions() {

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		//console.log('xmlhttp.onreadystatechange');
		//console.log(xmlhttp);
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//console.log('xmlhttp.responseText len=',xmlhttp.responseText.length);
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
		//console.log('timestamp:',timestamp);
		if (timestamp) {
			var timediv = document.getElementById('timestamp');
			timediv.innerHTML = timestamp;
		}
		
		var lineRef = data.body[i].monitoredVehicleJourney.lineRef;
		var vehicleRef = data.body[i].monitoredVehicleJourney.vehicleRef;
		var speed = data.body[i].monitoredVehicleJourney.speed;
		var bearing = data.body[i].monitoredVehicleJourney.bearing;
		var loc = data.body[i].monitoredVehicleJourney.vehicleLocation;
		var lat = parseFloat(loc.latitude);
		var lng = parseFloat(loc.longitude);
		//console.log('Line, vehicle, lat, lng:', lineRef, vehicleRef, lat,lng);
		
		recordBusData(vehicleRef,lineRef,lat,lng,speed,bearing,timestamp);
		
/* 		L.circleMarker([lat,lng], {
			color: 'black',
			opacity: 0.2,
			fillColor: 'lightyellow',
			fillOpacity: 0.2
		}).addTo(map) */
		
		//var busIcon = createHTMLicon(lineRef);
		//L.marker([lat,lng], {icon:busIcon}).addTo(map);			
		
		//L.circle([61.47757, 23.83982], 20, {
		//	color: 'red',
		//	fillColor: '#f03',
		//	fillOpacity: 0.2
		//}).addTo(map).bindPopup("sirkkeli");
		
	}
	renderBusData();
}

var busDataTable = {
	/*
	'testVehicleRef': {
		'name': 'testVehicle',
		'number': '99',
		'lat': 61.4732485,
		'lng': 23.8096987,
		'speed': 40,
		'bearing': 30		
		},
	'dummy': {
		'name': 'oho',
		'number': '98',
		'lat': 61.4701385,
		'lng': 23.8025887,
		'speed': 35,
		'bearing': 190	
		}
	*/
}

function recordBusData(vehicleRef,lineRef,lat,lng,speed,bearing,timestamp) {
	if (!busDataTable[vehicleRef]) {
		busDataTable[vehicleRef] = {};
	}
	busDataTable[vehicleRef].name = lineRef;
	busDataTable[vehicleRef].lat = lat;
	busDataTable[vehicleRef].lng = lng;
	busDataTable[vehicleRef].speed = speed;
	busDataTable[vehicleRef].bearing = bearing;
	if (!busDataTable[vehicleRef].positions) {
		busDataTable[vehicleRef].positions = [];
	}
	busDataTable[vehicleRef].positions.unshift([lat,lng]); //Insert at head
	if (busDataTable[vehicleRef].positions.length > 5) {
		busDataTable[vehicleRef].positions.pop();
	}
	if (!busDataTable[vehicleRef].markers) {
		busDataTable[vehicleRef].markers = [];
	}	
	if (!busDataTable[vehicleRef].timestamps) {
		busDataTable[vehicleRef].timestamps = [];
	}
	//console.log('busDataTable[',vehicleRef,']is now:', busDataTable[vehicleRef]);	
}

var opacityTableOLD = [0.2, 0.3, 0.4, 0.6, 1.0];
var opacityTable = [1.0, 0.4, 0.3, 0.2, 0.1];

function renderBusData () {
	for (var vehicleRef in busDataTable) {
		var bus = busDataTable[vehicleRef];
		var busIcon = createHTMLicon(22,22, bus.name, 'bus-icon');
		var trailIcon = createHTMLicon(40,40, '', 'trail-icon');
		for (var pos in bus.positions) {
			var lat = bus.positions[pos][0];
			var lng = bus.positions[pos][1];
			if (!bus.markers[pos]) {
				var newmarker = L.marker([lat,lng], {icon:trailIcon}).addTo(map);
				//console.log('newmarker:', newmarker);
				bus.markers[pos] = newmarker;
			}
			bus.markers[pos].setLatLng([lat,lng]);
			bus.markers[pos].setOpacity(opacityTable[pos]);	
			if (pos == 0) {   //If we are at head (could be empty so we never come here)
				bus.markers[0].setIcon(busIcon);  //Force head marker
			}
		}
		adjustBusIndicators(bus); //and add indicators (speed etc)
	}
}

var speedToOpacity = { 0: 0, 10: 0.5, 20: 0.6, 30: 0.7, 40: 0.8, 50: 0.9, 60: 1.0, 70: 1.0, 80: 1.0, 90: 1.0, 100: 1.0 }


function adjustBusIndicators (bus) {
	//console.log('adjustBusIndicators for',bus);
	if (!bus.speedMarker) {
		var speedIcon = createSpeedIcon();
		bus.speedMarker = L.marker([bus.lat,bus.lng], {icon:speedIcon}).addTo(map);		
	}
	bus.speedMarker.setLatLng([bus.lat,bus.lng]);

	var intBearing = parseInt(bus.bearing);
	bus.speedMarker._icon.style.transform += ' rotate('+intBearing+'deg)';
	bus.speedMarker._icon.style.webkitTransform += ' rotate('+intBearing+'deg)';

	var intSpeed = parseInt(bus.speed);
	var quantizedSpeed = Math.round(intSpeed/10)*10;
	var opacity = speedToOpacity[quantizedSpeed];
	bus.speedMarker._icon.style.opacity = opacity;	
}



renderBusMap();
renderBusStops();
renderRoute21();
renderRoute33();

getAndUpdateBusPositions();

