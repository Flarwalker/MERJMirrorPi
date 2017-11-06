// Required Modules
var express = require("express");
var app = express();
var mysql = require('mysql');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

// Config File variable
var layout = require('./layout.json');

// Database Connection
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "merjmirror"
});

conn.connect (function(err) {
    if (err) throw err
    console.log("Connected");
});

// Sets up the JSON to allow GET and POST operations.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sets up the Access the css and widgets folders.
app.use("/css", express.static(path.resolve(__dirname + "/css")));
app.use("/widgets", express.static(path.resolve(__dirname + "/widgets")));
app.use("/js", express.static(path.resolve(__dirname + "/js")));

// Loads the dataBase, creates the layout.json file, send the index.html page.
app.get('/', function(req, res) {
    var dataTypes;

    dbCall1 (function (err, results) {
        if (err) {
            throw err;
        } else {
            dataTypes = setData(results);
            dbCall (function (err, data) {
                if (err) {
                    throw err;
                } else {
                    genJson(data, dataTypes);
                }
            });
        }
    });

    res.send(fs.readFileSync(path.resolve(__dirname + "/index.html"), {encoding: "utf8"}));
});

// GET request for the Layout JSON file.
app.get('/layout', function(req, res) {
    layout = JSON.parse(fs.readFileSync('layout.json', 'utf8'));
    res.send(JSON.parse(fs.readFileSync('layout.json', 'utf8')));
});

// Sets node js to listen to port 8080.
app.listen(8080, function() {
	console.log('Server running on port 8080!');
	console.log('Visit http://localhost:8080 to view.');
});

// Call database and Select the active preference.
function dbCall(callback) {
    conn.query("SELECT dataDisplay FROM preference WHERE active = '1'", function (err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result[0].dataDisplay);
        }
    });
}

// Call the database and gets the list of data types.
function dbCall1(callback) {
    conn.query("SELECT * FROM datadisplay ORDER BY dataDisplayID", function (err, result) {
       if (err) {
           callback(err, null);
       } else {
           callback(null, result);
       }
    });
}

// Takes the database object and creates an array.
function setData (result) {
    var dataTypes = new Array();
    var i;
    for (i = 0; i < result.length; i++) {
        dataTypes.push(result[i].dataDisplay);
    }
    return dataTypes;
}

// Takes the database objexct and creates a JSON file.
function genJson (data, dataTypes) {
    var dataSets = data.split(":");
    var i;
    var spots = new Array();
    for ( i = 0; i < 9; i++) {
        var set = dataSets[i];
        var da = set.split(",");
        var d = da[1].split("(");

        if ((d[0] - 1) >= 0) {
            var type = dataTypes[d[0] - 1];
            spots.push(type);
        } else {
            spots.push("");
        }
    }

    var newLayout = {};
    newLayout.spots = {};
    newLayout.spots.spot1 = {data: spots[0], script: "widgets/" + spots[0] + ".js"};
    newLayout.spots.spot2 = {data: spots[1], script: "widgets/" + spots[1] + ".js"};
    newLayout.spots.spot3 = {data: spots[2], script: "widgets/" + spots[2] + ".js"};
    newLayout.spots.spot4 = {data: spots[3], script: "widgets/" + spots[3] + ".js"};
    newLayout.spots.spot6 = {data: spots[5], script: "widgets/" + spots[5] + ".js"};
    newLayout.spots.spot7 = {data: spots[6], script: "widgets/" + spots[6] + ".js"};
    newLayout.spots.spot8 = {data: spots[7], script: "widgets/" + spots[7] + ".js"};
    newLayout.spots.spot9 = {data: spots[8], script: "widgets/" + spots[8] + ".js"};

    fs.writeFile("layout.json", JSON.stringify(newLayout), function(err) {
        if (err) {
            console.log("Error with JSON right! " + err);
        } else {
            console.log("JSON config file write succesully");
        }
    });
}
