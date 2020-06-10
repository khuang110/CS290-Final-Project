var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

/*
 * Default home page to load... index.html
 */
app.get('/', function(req, res, next) {
    // res.status(200);
    res.status(200).sendFile(__dirname + "/public/index.html");
});

/*
 * page for pixel art
 */
app.get('/pixelArt.html', function(req, res, next) {
    // res.status(200);
    res.status(200).sendFile(__dirname + "/public/pixelArt.html");
});

/*
 * page for color combiner
 */
app.get('/combiner.html', function(req, res, next) {
    // res.status(200);
    res.status(200).sendFile(__dirname + "/combiner.html");
});

/*
 * page for canvas drawing
 */
app.get('/canvas.html', function(req, res, next) {
    // res.status(200);
    res.status(200).sendFile(__dirname + "/canvas.html");
});

/*
 * 404 page
 */
app.get('*', function(req, res, next) {
    // res.status(200);
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});