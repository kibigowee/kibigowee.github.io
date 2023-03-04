console.log("getWeatherData.js has loaded");
//check if geolocate api exists
if (navigator.geolocation) {
    //true
    alert('Lets get the location (placeholder)')
} else {
    //false
    alert('geolocate not available. some features may not work');
    //prompt for city?
}