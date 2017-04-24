//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express configuration
//create an express server
var app = express();

//Sets an initial port
var PORT = process.env.PORT || 8080;

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Router:
require("./app/Routing/api-routes.js")(app);
require("./app/Routing/html-routes.js")(app);

//Listener:
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
