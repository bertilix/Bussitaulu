var map = L.map('map').setView([51.505, -0.09], 13);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'orange',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 300,
}).addTo(map);

var polygon = L.polygon([
    [51.50, -0.08],
    [51.51, -0.06],
    [51.52, -0.07],
]).addTo(map);

// Luodaan markkerille popup ja avataan se saman tien.
marker.bindPopup('<b>Hello!</b><br>Pop pop pop -musiikkia').openPopup();
circle.bindPopup('Minäpäs olen pylpyrä.');
polygon.bindPopup('Mulla on polykonit.');

// You can also use popups as layers (when you need something 
// more than attaching a popup to an object). 
// Here we use openOn instead of addTo because
// it handles automatic closing of a previously opened popup
// when opening a new one which is good for usability.
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("Olen ulkonaseisova poppari.")
    .openOn(map);

function onMapClick(e) {
    alert('Klikkasit karttoo kohassa:' + e.latlng);
}
// map.on('click', onMapClick);

function onMapClick2(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('Klikkasit kohassa:' + e.latlng.toString())
        .openOn(map)
}
map.on('click', onMapClick2);



// https://leafletjs.com/examples/custom-icons/

//Creating an icon

// Marker icons in Leaflet are defined by L.Icon objects, 
// which are passed as an option when creating markers. 
// Let’ s create a green leaf icon:

var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor    
})

L.marker([51.5, -0.09], {
    icon: greenIcon
}).addTo(map);

// What if we need to create several icons that have lots in common ? Let’ s define our own icon class containing the shared options, inheriting from L.Icon!It’ s really easy in Leaflet :

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor    
    }
});

// Now we can create all three of our leaf icons from this class and use them:
var greenIcon2 = new LeafIcon({iconUrl: 'leaf-green.png'})
var redIcon2 = new LeafIcon({iconUrl: 'leaf-red.png'})
var orangeIcon2 = new LeafIcon({iconUrl: 'leaf-orange.png'})
// You may have noticed that we used the new keyword for creating LeafIcon instances. So why do all Leaflet classes get created without it? The answer is simple: the real Leaflet classes are named with a capital letter (e.g. L.Icon), and they also need to be created with new, but there are also shortcuts with lowercase names (L.icon), created for convenience like this:
// L.icon = function (options) {
//     return new L.Icon(options);
// };
var green = L.marker([51.500,-0.090], {icon: greenIcon2}).addTo(map).bindPopup('VIhree');
var red = L.marker([51.495,-0.083], {icon: redIcon2}).addTo(map).bindPopup('Punane');
var orange = L.marker([51.490,-0.100], {icon: orangeIcon2}).addTo(map).bindPopup('Oooranssi');


// Layer groups: https://leafletjs.com/examples/layers-control/
// 
var green2 = L.marker([51.490,-0.100], {icon: greenIcon2}).bindPopup('VIhree');
var red2 = L.marker([51.488,-0.105], {icon: redIcon2}).bindPopup('Punane');
var orange2 = L.marker([51.486,-0.110], {icon: orangeIcon2}).bindPopup('Oooranssi');

var lehdet = L.layerGroup([green2,red2,orange2]);


// How to switch layers on and off

var osm2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
})
var map2 = L.map('map2', {
    center: [51.505, -0.09],
    zoom: 12,
    layers: [osm2,lehdet]
});

alert("klikkaileppas karttoo");
var visible = true;
function onMap2Click(e) {
    if (visible) {
        lehdet.removeFrom(map2);
        visible = false;
    } else {
        lehdet.addTo(map2);
        visible=true;
    }
}
map2.on('click', onMap2Click);

