const express = require("express");
const hbs = require("hbs");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const fibonacciRouter = require("./routes/fibonacci");
const app = express();

// viewe engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "partials"));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/fibonacci", fibonacciRouter);

app.listen(3000, () => {
  console.log("sesrver runnong on 3000");
});
module.exports = app;
