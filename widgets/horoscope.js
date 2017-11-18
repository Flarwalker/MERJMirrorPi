horoDivs();

function horoDivs () {
    $('#Horoscope').html('<div id="sign" class="auto-margin"></div>' +
                         '<div id="range" class="auto-margin"></div>' +
                         '<div id="mood" class="auto-margin"></div>' +
                         '<div id="desc" class="auto-margin"></div>');
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
