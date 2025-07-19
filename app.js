// Create a map centered around a specific location
var map = L.map('map').setView([51.505, -0.09], 13);  // Coordinates: London

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-0.09, 51.5]
            },
            "properties": {
                "name": "London"
            }
        }
    ]
};

L.geoJSON(geojsonData).addTo(map);

