jQuery(document).ready(function() {

    weatherLookUp("OH", "Toledo");
    horoscopeLookUp("Pisces");

    function weatherLookUp(state, city) {
        $.ajax({
            url: "https://api.wunderground.com/api/a11346804b94d5dd/geolookup/conditions/q/"+ state +"/" + city + ".json",
            dataType: "jsonp",
            success: function(parsed_json) {
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

                  var skycons = new Skycons({"color": "white"});
                  skycons.add("icon1", weatherIcon[condition]);
                  skycons.play();

                }

                iconSet(weather);

                $("#weather").html("In the city of " + city + " the weather is " + weather + ".");
                $("#temp").html("The temperature is " + temp_f + "&deg; Fahrenheit.");
            },
        error: function() {
            console.log("API Offline")
        }
        });
    }

    function horoscopeLookUp(sunsign) {
        $.ajax({
            url: "http://horoscope-api.herokuapp.com/horoscope/today/" + sunsign,
            dataType: 'json',
            success: function(parsed_json) {
                console.log(parsed_json);
                $("#horoscope").html(parsed_json);
            },
            error: function() {
                console.log("Horoscope failed");
                $("#horoscope").html("fail");
            }
        })
    }
});
