horoDivs();

function horoDivs () {
    $('#Horoscope').html('<div id="sign">Leo</div>' +
                         '<div id="range"></div>' +
                         '<div id="mood"></div>' +
                         '<div id="desc"></div>');
    horoscopeLookUp(sign); // FIX the Sign thingy
}

function horoscopeLookUp(sign) {
    $.ajax({
        type: 'POST',
        url: "http://aztro.herokuapp.com?sign=aries&day=today",
        success: function(horoData) {
            $('#range').html("Sign: " + horoData.date_range);
            $('#mood').html("Mood: " + horoData.mood);
            $('#desc').html(horoData.description);
        },
        error: function() {
            console.log("Horoscope failed");
        }
    });
}
