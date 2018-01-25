var express = require("express");
var app = express();

app.use(express.static("web")).listen(3000);
