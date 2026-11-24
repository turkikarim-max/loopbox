var map = L.map('map').setView([36.8065, 10.1815], 12);

L.tileLayer('YOUR_CURRENT_WORKING_TILE_URL', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

// Example coordinates (replace with your real locations)
var locations = [
    [36.8065, 10.1815],
    [36.8180, 10.1650],
    [36.7900, 10.1800]
];

var markers = [];

locations.forEach(function(location, index) {
    var marker = L.marker(location).addTo(map);

    marker.bindPopup('LoopBox Collection Point ' + (index + 1));

    markers.push(marker);
});

function showLocation(index) {
    var location = locations[index];

    map.setView(location, 16);
    markers[index].openPopup();
}