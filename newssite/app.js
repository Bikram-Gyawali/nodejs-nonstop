const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

const PORT = 5000;

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

//templationg engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//routes
const newsRouter = require("./src/routes/news");

app.use("/", newsRouter);

app.listen(PORT, () => {
  console.log("listening on port: http://loalhost:5000");
});
