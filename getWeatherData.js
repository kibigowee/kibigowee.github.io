console.log("getWeatherData.js has loaded");

//check if geolocate api exists
if (navigator.geolocation) {
    // request pos
    // if successful, call getPosSucess. if not, call getPosError
    navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr)
} else {
    //false
    alert('geolocate not available. some features may not work');
    //prompt for city?
}

function getPosSuccess(pos){
    // get coords and accuracy properties from returned object
    var geoLat = pos.coords.latitude.toFixed(5);
    var geoLng = pos.coords.longitude.toFixed(5);
    var geoAcc = pos.coords.accuracy.toFixed(5);
}

function getPosErr(err){
    switch (err.code){
        case err.PERMISSION_DENIED:
            alert("user denied geolocation request");
            break;
        case err.PERMISSION_DENIED:
            alert("location information unavailable");
            break;
        case err.PERMISSION_DENIED:
            alert("the request to get user location timed out");
            break;
        default:
            alert("an unknown error occured");
    }
}