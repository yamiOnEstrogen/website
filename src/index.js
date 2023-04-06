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
const { owner, webApp } = require("./config.js");
const Project = require("./services/project");
const project = new Project();
const Status = require("./services/status");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/api", require("./services/api.js"));


app.get("/", async (req, res) => {
    console.log(webApp.theme)
    res.render("index", {
        owner: owner,
        host: req.headers.host,
        github: await github.getPublicRepos(),
        pinned: await github.getPinnedRepos(),
        projects: await project.getProjects(),
        theme: webApp.theme,
    });
});


app.get("/website-themes", async (req, res) => {
  res.redirect("https://github.com/zenithvt/zenithlive.lol/wiki/Website-Themes#adding-colors-to-your-website-theme");
});

app.get("/status", async (req, res) => {
  const statusCodes = await Status.getStatusCodes();
  

  if (process.env.NODE_ENV === "development") console.log(statusCodes);

  res.render("status", {
    statusCodes: statusCodes,
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

app.get("/invite", (req, res) => {
  res.redirect("/redirect?url=https://discord.gg/RyzuKecPX8&title=Join%20the%20Discord%20Server");
})

app.listen(process.env.PORT || 3000, () => {
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


  setInterval(async () => {
    Status.updateStatusCodes();
    logger.log("Status codes have been updated", "status");
  } , 300000);

 


});


