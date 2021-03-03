var express = require("express");
var app = express();
require("dotenv").config({ path: __dirname + "/.env" });

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const endpoint = require("./http/route");
app.use("/", endpoint);
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
