const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const Logger = require("./utils/logger.js");
const logger = new Logger({ debug: true });


const serverConfig = {
  poweredBy: "Love",
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine(".ejs", ejs.__express);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.setHeader("X-Powered-By", serverConfig.poweredBy);
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/redirect", (req, res) => {
  res.setHeader("X-Powered-By", serverConfig.poweredBy); 
    const url = req.query.url;
    if (url == null || url == "" || url == undefined) {
      res.json({
        error: "No url provided"
      });
      logger.error("No url provided");
    } else {
      res.render("redirect", {
        REDIRECT_URL: url,
        REDIRECT_URL_SHORT: url
          .replace("https://", "")
          .replace("http://", "")
          .replace("www.", "")
          .split("/")[0],
        baseUrl: req.protocol + "://" + req.get("host"),
      });
      logger.log("Redirecting to " + url);
    }
});



app.listen(process.env.PORT || 5600, () => {
    logger.info(`Express server listening on port ${process.env.PORT}`);
})







