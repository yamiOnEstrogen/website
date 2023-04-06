const axios = require("axios");
const Logger = require("../utils/logger.js");
const logger = new Logger({ debug: true });


const urls = [
    {
        url: "https://home.unfatal.xyz",
        name: "Unfatal",
    },
    {
        url: "https://ranrom.xyz",
        name: "ranrom.xyz",
    },
    {
        url: "https://www.indivoxystudios.com/",
        name: "Indivoxy Studios",
    }
];

const listOfCodes = [
    {
        code: 200,
        name: "Operational",
    },
    {
        code: 400,
        name: "Bad Request",
    },
    {
        code: 404,
        name: "Not Found",
    },
    {
        code: 408,
        name: "Request Timeout",
    },
    {
        code: 500,
        name: "Internal Server Error",
    },
    {
        code: 502,
        name: "Bad Gateway",
    },
    {
        code: 503,
        name: "Service Unavailable",
    },
    {
        code: 504,
        name: "Gateway Timeout",
    },
    {
        code: 520,
        name: "Unknown Error",
    },
    {
        code: 521,
        name: "Web Server Is Down",
    },
    {
        code: 522,
        name: "Connection Timed Out",
    },
    {
        code: 523,
        name: "Origin Is Unreachable",
    },
    {
        code: 524,
        name: "A Timeout Occurred",
    },
    {
        code: 525,
        name: "SSL Handshake Failed",
    },
    {
        code: 526,
        name: "Invalid SSL Certificate",
    },
    {
        code: 527,
        name: "Railgun Error",
    },
    {
        code: 530,
        name: "Origin DNS Error",
    },
    {
        code: 598,
        name: "Network Read Timeout Error",
    },
    {
        code: 599,
        name: "Network Connect Timeout Error",
    }
];


let statusQueue = [];


class Status {
    constructor() {}


    async getStatusCodes() {
        if (statusQueue.length === 0) await this.updateStatusCodes();
        return statusQueue;
    };

    async updateStatusCodes() {
        if (statusQueue.length > 0) statusQueue = [];
        for (const url of urls) {
            try {
                const response = await axios.get(url.url); // Get the status code

                logger.log(`${url.name} is ${response.status}`); // Log the status code
                statusQueue.push({
                    name: url.name, // Push the status code to the array
                    link: url.url, // Push the link to the array
                    code: {
                        code: response.status, // Push the status code to the array
                        name: listOfCodes.find((code) => code.code === response.status).name, // Push the website name to the array
                        isBad: response.status >= 400 ? true : false, // Push whether the status code is bad or not to the array
                    }
                });
            }
            catch (error) {
               logger.log(`${url.name} returned ${error.response.status}`, "error"); // Log that the status code is bad
                statusQueue.push({
                    name: url.name, // Push the status code to the array
                    link: url.url, // Push the link to the array
                    code: {
                        code: error.response.status, // Push the status code to the array
                        name: listOfCodes.find((code) => code.code === error.response.status).name, // Push the website name to the array
                        isBad: error.response.status >= 400 ? true : false, // Push whether the status code is bad or not to the array

                    }
                });

                continue; // Skip to the next iteration
            }
           
            
        }
        return true;
    }
}

module.exports = new Status();