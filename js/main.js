$(document).ready(function() {
    $.get('/layout', function(ret) {
        var dataSets = [];
        ret = ret.spots;
        console.log(dataSets);
        for (var temp in ret) {
            if(!(ret[temp].data.trim() === "")) {
                dataSets.push(ret[temp]);
            }
        }

        var spot1 = document.getElementById('spot1');
        spot1.innerHTML = '<div id = "' + dataSets[0].data + '" class = "widget"></div>';

        var spot2 = document.getElementById('spot2');
        spot2.innerHTML = '<div id = "' + dataSets[1].data + '" class = "widget"></div>';

        var spot3 = document.getElementById('spot3');
        spot3.innerHTML = '<div id = "' + dataSets[2].data + '" class = "widget"></div>';

        var spot4 = document.getElementById('spot4');
        spot4.innerHTML = '<div id = "' + dataSets[3].data + '" class = "widget"></div>';

        var spot5 = document.getElementById('spot5');
        spot5.innerHTML = '';

        var spot6 = document.getElementById('spot6');
        spot6.innerHTML = '<div id = "' + dataSets[4].data + '" class = "widget"></div>';

        var spot7 = document.getElementById('spot7');
        spot7.innerHTML = '<div id = "' + dataSets[5].data + '" class = "widget"></div>';

        var spot8 = document.getElementById('spot8');
        spot8.innerHTML = '<div id = "' + dataSets[6].data + '" class = "widget"></div>';

        var spot9 = document.getElementById('spot9');
        spot9.innerHTML = '<div id = "' + dataSets[7].data + '" class = "widget"></div>';
    });
});
