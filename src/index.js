const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const os = require("os");
const { version, author, license } = require("../package.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.get("/", async (req, res) => {
    res.render("index", {
        version,
        author,
        license,
        errorsound: "https://cdn.discordapp.com/attachments/1102713736193650778/1103821524751888544/error-warning-login-denied-132113.mp3",
        error: req.query.error || null
    });
});


app.post("/cmd/:commandname", async (req, res) => {
    const commandname = req.params.commandname;

    try {
        const command = require(`./commands/${commandname}.js`);
        const result = await command.execute(req.body.message, req.body.args);
        const canBeExecuted = command.canBeExecuted;
        res.json({
            output: result,
            canBeExecuted: canBeExecuted
        });
    } catch (error) {
        const errorOutput = error.message.split("\n")[0];
        res.json({
            error: `There was an error executing the command: ${errorOutput}`
        });
    }
});



app.get("*", async (req, res) => {
    res.redirect("/");
});


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



    console.log(`To View on your Machine go to: http://localhost:${process.env.PORT || 3000}`);
    console.log(`To View on your Network go to: http://${addresses[0]}:${process.env.PORT || 3000}`);



});
