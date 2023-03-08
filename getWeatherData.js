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

fn_getWeatherByLL();

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


function fn_getWeatherByLL(geoLat,geoLng){
  //API Variables
  var dsAPI = "https://api.open-meteo.com/v1/";
  //Concatenate API Variables into a URLRequest
  //https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weathercode&models=best_match&temperature_unit=fahrenheit
  var URLRequest = dsAPI + "forecast?latitude=" + String(geoLat) + "&longitude=" + String(geoLng) + "&hourly=temperature_2m,weathercode&models=best_match&temperature_unit=fahrenheit";
  //Make the jQuery.getJSON request
  $.getJSON( URLRequest )
    //Success promise
    .done(function( data ) {
      var wTemperature = data.current_weather.temperature;
      alert('worked! temperature right now in ' + data.timezone + ' is ' + wTemperature);
      // lots of results available on the data object
      // use the results to populate the GUI here
    })
    //Error promise
    .fail(function() {
      alert('failed to gather weather information, sorry for the inconvenience');
    }
  );
}