var express = require("express"),
// import bodyParser from 'body-parser';
  routes = require("./routes"),
  logger = require("log4js").getLogger("app");

var app = express();

app.set("port", (process.env.PORT || 5000));

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

routes(app);

app.listen(app.get("port"), function() {
  logger.info("Node app is running on port", app.get("port"));
});
