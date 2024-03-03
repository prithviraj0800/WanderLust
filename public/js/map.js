mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style:'mapbox://styles/mapbox/streets-v12',
    // camera options properties - https://docs.mapbox.com/help/glossary/camera/
    center: listing.geometry.coordinates,
    pitch: 60, // pitch in degrees
    bearing: -60, // bearing in degrees
    zoom: 10
});
// console.log(coordinates);

const marker2 = new mapboxgl.Marker({ color: 'red', rotation: 0 })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided agter booking</p>`))
    .addTo(map);
