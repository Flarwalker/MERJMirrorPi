newsDivs();

function newsDivs() {
    $("#News").html('<div id="title"></div>' +
                    '<div id="description"></div>' +
                    '<div id="author"></div>');
    newsLookUp();
}

//This gets the top article from the source
function newsLookUp() {
    $.get('/layout', function (ret) {
        var source = ret.newsSource;
        var url = "https://newsapi.org/v1/articles?source=" + source + "&apiKey=b534fc994e2d41158d033455ba123406";
        $.ajax({
            type: 'GET',
            url: url,
            success: function (parsed_json) {
                var title = parsed_json['articles'][0]['title'];
                var description = parsed_json['articles'][0]['description'];
                var author = parsed_json['articles'][0]['author'];
                $("#title").html(title);
                $("#description").html(description);
                if (author != "") {
                    $("#author").html("Author " + author);
                }
            },
            error: function() {
                console.log("News failed");
            }
        })
    });
}
