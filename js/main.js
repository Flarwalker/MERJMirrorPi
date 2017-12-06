$(document).ready(function() {
    $.get('/layout', function(ret) {
        var dataSets = [];
        ret = ret.spots;
       for (var temp in ret) {
            dataSets.push(ret[temp]);
        }

        if (dataSets[0].data != "") {
            var spot1 = document.getElementById('spot1');
            spot1.innerHTML = '<div id = "' + dataSets[0].data + '" class = "widget"></div>';
            $.getScript(dataSets[0].script, function(data) {
                console.log("Widget loaded for " + dataSets[0].script);
            });
        }

        if (dataSets[1].data != "") {
            var spot2 = document.getElementById('spot2');
            spot2.innerHTML = '<div id = "' + dataSets[1].data + '" class = "widget"></div>';
            $.getScript(dataSets[1].script, function(data) {
                console.log("Widget loaded for " + dataSets[1].script);
            });
        }

        if (dataSets[2].data != "") {
            var spot3 = document.getElementById('spot3');
            spot3.innerHTML = '<div id = "' + dataSets[2].data + '" class = "widget"></div>';
            $.getScript(dataSets[2].script, function(data) {
                console.log("Widget loaded for " + dataSets[2].script);
            });
        }

        if (dataSets[3].data != "") {
            var spot4 = document.getElementById('spot4');
            spot4.innerHTML = '<div id = "' + dataSets[3].data + '" class = "widget"></div>';
            $.getScript(dataSets[3].script, function(data) {
                console.log("Widget loaded for " + dataSets[3].script);
            });
        }

        var spot5 = document.getElementById('spot5');
        spot5.innerHTML = '';

        if (dataSets[5].data != "") {
            var spot6 = document.getElementById('spot6');
            spot6.innerHTML = '<div id = "' + dataSets[5].data + '" class = "widget"></div>';
            $.getScript(dataSets[5].script, function(data) {
                console.log("Widget loaded for " + dataSets[5].script);
            });
        }

        if (dataSets[6].data != "") {
            var spot7 = document.getElementById('spot7');
            spot7.innerHTML = '<div id = "' + dataSets[6].data + '" class = "widget"></div>';
            $.getScript(dataSets[6].script, function(data) {
                console.log("Widget loaded for " + dataSets[6].script);
            });
        }

        if (dataSets[7].data != "") {
            var spot8 = document.getElementById('spot8');
            spot8.innerHTML = '<div id = "' + dataSets[7].data + '" class = "widget"></div>';
            $.getScript(dataSets[7].script, function(data) {
                console.log("Widget loaded for " + dataSets[7].script);
            });
        }

        if (dataSets[8].data != "") {
            var spot9 = document.getElementById('spot9');
            spot9.innerHTML = '<div id = "' + dataSets[8].data + '" class = "widget"></div>';
            $.getScript(dataSets[8].script, function(data) {
                console.log("Widget loaded for " + dataSets[8].script);
            });
        }

    });
});
