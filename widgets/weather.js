weatherDivs();

function weatherDivs () {
    $('#Weather').html('<div id ="weather"></div><canvas id="icon1"> </canvas><div id="temp"></div>');

    weatherLookUp("OH", "Toledo");
    setInterval('weatherLookUp()', 600000);
}

function weatherLookUp(state, city) {
    $.ajax({
        url: "https://api.wunderground.com/api/a11346804b94d5dd/geolookup/conditions/q/" + state + "/" + city + ".json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var temp_f = parsed_json['current_observation']['temp_f'];
            var weather = parsed_json['current_observation']['weather'];

            function iconSet(condition) {
                var weatherIcon = {
                    "Clear": Skycons.CLEAR_DAY,
                    "Partly Cloudy": Skycons.PARTLY_CLOUDY_DAY,
                    "Mostly Cloudy": Skycons.CLOUDY,
                    "Rain": Skycons.RAIN,
                    "Light Rain": Skycons.RAIN,
                    "Light Thunderstorms and Rain": Skycons.RAIN,
                    "Sleet": Skycons.SLEET,
                    "Snow": Skycons.SNOW,
                    "Windy": Skycons.WIND,
                    "Overcast": Skycons.CLOUDY,
                    "Heavy Rain": Skycons.RAIN
                };

                var skycons = new Skycons({
                    "color": "white"
                });
                skycons.add("icon1", weatherIcon[condition]);
                skycons.play();

            }

            iconSet(weather);

            $("#weather").html("Current weather in " + city + " is " + weather + ".");
            $("#temp").html("The temperature is " + temp_f + "&deg; Fahrenheit.");
        },
        error: function () {
            console.log("API Offline")
        }
    });
}
