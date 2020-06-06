var http = require('http');

var fs = require('fs');

const PORT = process.env.PORT || 3000;
console.log(PORT);

var htmlContent = fs.readFileSync('public/index.html');
var cssContent = fs.readFileSync('public/style.css');
var jsContent = fs.readFileSync('public/index.js');
var errorContent = fs.readFileSync('public/404.html');


function requestHandler(req, res) {

    console.log("== Got a request");
    console.log("  -- HTTP method:", req.method);
    console.log("  -- Resource:", req.url);
    console.log("  -- Headers:", req.headers);

    if ((req.url == '/index.html') || (req.url == '/')){

        res.writeHead(200, {

            "Content-Type": "text/html"

        });

        res.write(htmlContent);

    } else if (req.url == '/style.css') {

        res.writeHead(200, {

            "Content-Type": "text/css"

        });

        res.write(cssContent);

    } else if (req.url == '/index.js') {

        res.writeHead(200, {

            "Content-Type": "application/javascript"

        });

        res.write(jsContent);

    } else if (req.url == '/404.html') {

        res.writeHead(200, {

            "Content-Type": "text/html"

        });

        res.write(errorContent);

    } else {

        res.writeHead(404, {

            "Content-Type": "text/html"

        });

        res.write(errorContent);

    }

    res.end();

}

var server = http.createServer(requestHandler);

server.listen(PORT);
