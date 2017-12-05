stockDivs();

function stockDivs() {
    $('#Stocks').html('<div id ="stocks">' +
        '<div id="stock_title"></div>' +
        '<div id="open"></div>' +
        '<div id="high"></div>' +
        '<div id="low"></div>' +
        '<div id="close"></div>' +
        '</div>');

    stockSet();
    setInterval('stockSet()', 600000);
}

function stockSet() {
    $.get('/layout', function (ret) {
        var stockname = ret.stocks;
        $.ajax({
            type: 'GET',
            url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + stockname + "&apikey=D2BSH93RQ73806N5",
            success: function (parsed_json) {
                var date = new Date();
                var currentdate;

                date.getDate();

                currentdate =
                    date.getFullYear() +
                    "-" +
                    ("0" + (date.getMonth() + 1)).slice(-2) +
                    "-" +
                    ("0" + date.getDate()).slice(-2);

                var stockname = parsed_json['Meta Data']['2. Symbol'];
                var open = parsed_json['Time Series (Daily)'][currentdate]['1. open'];
                var high = parsed_json['Time Series (Daily)'][currentdate]['2. high'];
                var low = parsed_json['Time Series (Daily)'][currentdate]['3. low'];
                var close = parsed_json['Time Series (Daily)'][currentdate]['4. close'];

                $("#stock_title").html("Stock: " + stockname);
                $("#open").html("Open: " + open);
                $("#high").html("High: " + high);
                $("#low").html("Low: " + low);
                $("#close").html("Close: " + close);
            },
            error: function () {
                console.log("API Offline");
            }
        });
    });
}
