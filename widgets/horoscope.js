
    horoscopeLookUp("Pisces");

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
