horoDivs();

function horoDivs () {
    $('#Horoscope').html('<div id="sign"></div>' +
                         '<div id="range"></div>' +
                         '<div id="mood"></div>' +
                         '<div id="desc"></div>');
    horoscopeLookUp(); // FIX the Sign thingy
}

function horoscopeLookUp() {
    $.get('/layout', function(ret) {
        var sign = ret.sunSign;
        $.ajax({
            type: 'POST',
            url: "http://aztro.herokuapp.com?sign=" + sign + "&day=today",
            success: function(horoData) {
                $('#sign').html("Sign: " + sign);
                $('#range').html("Date Range: " + horoData.date_range);
                $('#mood').html("Mood: " + horoData.mood);
                $('#desc').html(horoData.description);
            },
            error: function() {
                console.log("Horoscope failed");
            }
        });
    });
}
