var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.render("home.ejs")
});

// app.listen(8080, function(){
app.listen(port, function(){
    console.log("Countdown started")
});