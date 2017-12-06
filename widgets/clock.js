clockDivs ();

function clockDivs () {
    $('#Clock').html('<div id ="Time"></div><br /><div id="Date"></div>');
    startTime();
}

function startTime () {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var ap = (hr < 12) ? "AM" : "PM";

    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();

    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    if (hr < 10) {
        hr = "0" + hr;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    var time = hr + ":" + min + "<span id='Sec'>:" + sec + "</span><span id='AMPM'>" + ap + "</span>";
    var date = curWeekDay + " " + curMonth + " " + curDay + ", " + curYear;

    document.getElementById("Time").innerHTML = time;
    document.getElementById("Date").innerHTML = date;

    var time = setTimeout(function() { startTime() }, 500);
}
