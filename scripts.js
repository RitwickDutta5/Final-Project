// use mapbox mercator projection along with access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    bounds: [64.81236, 3.14440, 98.33055, 38.38267],
    zoom: 2,
});
// add navigation control
map.addControl(new mapboxgl.NavigationControl());
// add shapefile
map.on('load', function () {
    map.addSource('states-india', {
        type: 'geojson',
        data: 'data/states-india.geojson',
    }),
// add fill and line layers
        map.addLayer({
            id: 'fill-states-india',
            type: 'fill',
            source: 'states-india',
        })
// figure out how to add styling dependant on the string variable
    map.addLayer({
        id: 'line-states-india',
        type: 'line',
        source: 'states-india',
        paint: {
            'line-color': '#FFFFFF'
        }
    })

})


