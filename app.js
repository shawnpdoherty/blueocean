var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.render("home.ejs")
});

app.listen(8080, function(){
    console.log("Countdown started")
});