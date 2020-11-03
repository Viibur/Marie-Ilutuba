// Initialize and add the map
function initMap() {
// The location of Uluru
const koht = { lat: 59.430, lng: 24.757 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 13,
  center: koht,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
  position: koht,
  map: map,
});
}