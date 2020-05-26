var express = require("express");
var cfenv = require('cfenv');
var http = require('http');
var bodyParser = require("body-parser");
app = express();


var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();

var appEnv = cfenv.getAppEnv();
var server = http.createServer();

// start the server on the given port and binding host, and print
// url to server when it starts

console.log("Passed http", port);

//server.listen(appEnv.port, appEnv.bind, function() {
//   console.log("server starting on " + appEnv.url);
//});


