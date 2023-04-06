const Logger = require("../utils/logger.js");
const logger = new Logger({ debug: true });
const { webApp, owner } = require("../config.js");
const { exec } = require("child_process");

let isVerbose = false;

const showHelp = () => {
    console.clear();
    const { version } = require("../../package.json");

    console.log(`Zenith Personal Website v${version}`);
    console.log("Usage: start_service -- [options]");
    console.log("verbose: Show more information in the console");
    console.log("help: Show this help message");
    console.log("");
    console.log("Example: npm run start_service -- verbose");
    console.log("");
    console.log("For more information, please visit https://github.com/zenithvt/zenithlive.lol/wiki/Start-Service");
    console.log("");
    process.exit(0);
}


const shorten = (string, length) => {
    if (typeof string!== "string") return string;
    if (string.length > length) {
        return string.substring(0, length) + "...";
    }
    return string;
}


const args = process.argv.slice(2);

if (args[0] == "help") showHelp();

if (args[0] == "verbose") isVerbose = true;




const captitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



const checkForType = (type, value, name) => {

    if (value == undefined) throw new Error(`${name}::${value} is not defined (src/config.js)`);

    if (typeof value !== type) throw new Error(`${name}::${value} is not a ${captitalize(type)} (src/config.js)`);

    if (isVerbose === true) {
        if (typeof value == "object" || typeof value == "array") {
            logger.log(`${name}::${captitalize(type)} (src/config.js)`, "debug");
        }

        else {
            logger.log(`${name}::${captitalize(type)} (src/config.js)`, "debug");
        }
    }
    return value;

    
}





for (const [key, value] of Object.entries(owner)) {
    checkForType(typeof value, value, key);
}



for (const [key, value] of Object.entries(webApp)) {
    checkForType(typeof value, value, key);
}



//* Path: src\services\start.js