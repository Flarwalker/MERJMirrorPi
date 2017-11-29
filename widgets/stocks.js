stockDivs ();

function stockDivs () {
    $('Stock').html('<div id = "open"></div>');

    stockSet();
    setInterval('stockSet()', 600000);
}

function stockSet () {
    $.get('/stocks', function(ret) {
       var stockname = ret.stockname;
        $.ajax({
            url:
            "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + stockname + "&apikey=D2BSH93RQ73806N5",
            sucess: function (parsed_json) {
                var curDay = today.getDate();
                var curMonth = months[today.getMonth()];
                var curYear = today.getFullYear();

                var currentdate = curYear + "-" + curMonth + "-" + curDay;

                var stockname = parsed_json['Meta Data']['2. Symbol'];
                var open = parsed_json['Time Series (Daily)'][currentdate]['1. open'];
                var high = parsed_json['Time Series (Daily)'][currentdate]['2. high'];
                var low = parsed_json['Time Series (Daily)'][currentdate]['3. low'];
                var close = parsed_json['Time Series (Daily)'][currentdate]['4. close'];


            }
        })
        error: function( {
            console.log("API Offline")
        })
    });
}
