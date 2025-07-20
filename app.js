// Create a map centered around a specific location
var map = L.map('map').setView([51.07725, 13.71935], 13);  // Coordinates: Dresden

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var home = L.marker([51.07725, 13.71935]).addTo(map);
home.bindPopup("<b>My house</b><br>This is where I stay!").openPopup();
var work = L.marker([51.09725, 13.69210]).addTo(map);
work.bindPopup("<b>My workplace</b><br>I make money here!").openPopup();
var gym = L.marker([51.08, 13.7136]).addTo(map);
gym.bindPopup("<b>My gym</b><br>I workout here sometimes!").openPopup();
// Define the start and end points for the route
var start = [51.07725, 13.71935];  // Starting point
var end = [51.09725, 13.69210];     // End point

// Add the route to the map using Leaflet Routing Machine
var routeControl = L.Routing.control({
    waypoints: [
        L.latLng(start),  // Start point
        L.latLng(end)     // End point
    ],
    routeWhileDragging: true  // Allow route to update while dragging the points
}).addTo(map);