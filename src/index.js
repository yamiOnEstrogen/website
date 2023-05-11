const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const Logger = require("./utils/logger.js");
const logger = new Logger({ debug: true });
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const Github = require("./utils/github");
const github = new Github();
const os = require("os");
const EmailService = require("./Services/mailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use((req, res, next) => {
  // Check if the request is asking for the favicon
  if (req.url == "/favicon.ico" || req.url == "/favicon") {
    res.redirect("https://www.goddessanime.com/api/user/547923574833545226/avatar");
  }
  else {
    next();
  }
});


app.get("/", async (req, res) => {
  res.render("index", {
    host: req.headers.host
  });
});

app.get("/error", (req, res) => {
  const error = req.query.err;
  const code = req.query.code;
  if (error == null || error == "" || error == undefined) {
    res.json({
      error: "No error provided"
    });
  }
  else {
    res.render("error.ejs", {
      error: error,
      code: code,
    })
  }
});

app.get("/redirect", (req, res) => {
  const url = req.query.url;
  const title = req.query.title || "Redirecting...";

  if (url == null || url == "" || url == undefined) {
    res.json({
      error: "No url provided"
    });
  }
  else {
    res.render("redirect", {
      REDIRECT_URL: url,
      REDIRECT_TITLE: title,
      HOST: req.hostname,
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

app.get("/contact", (req, res) => {
  res.redirect("/#contact-info")
});

app.get("/discord", (req, res) => {
  res.redirect("/redirect?url=https://discord.gg/hCqQDuUY3r8&title=Join%20the%20Discord%20Server");
});

app.post("/contact", async (req, res) => {

  const { name, email, message } = req.body;


  try {
    await EmailService.accpetContactRequest(name, email, message)

    res.status(200).json({
      message: "Email Sent"
    });

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
});

app.listen(process.env.PORT || 3000, async () => {
  console.clear();


  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (k in interfaces) {
    for (k2 in interfaces[k]) {
      const address = interfaces[k][k2];
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address);
      }
    }
  }



  logger.log(`To View on your Machine go to: http://localhost:${process.env.PORT || 3000}`, "websocket");
  logger.log(`To View on your Network go to: http://${addresses[0]}:${process.env.PORT || 3000}`, "websocket");

});
