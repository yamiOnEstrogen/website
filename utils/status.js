const axios = require("axios");


const urls = [
    {
        url: "https://home.unfatal.xyz",
        name: "Unfatal",
    },
    {
        url: "https://1.kiyodev.xyz",
        name: "kiyodev.xyz",
    },
    {
        url: "https://ranrom.xyz",
        name: "ranrom.xyz",
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
        code: 530,
        name: "Frozen / Down"
    }
]


class Status {
    constructor() {}


    async getStatusCodes() {
        const statusCodes = [];
        for (const url of urls) {
            const response = await axios.get(url.url);
            console.log(response.status)
            statusCodes.push({
                name: url.name,
                link: url.url,
                code: {
                    code: response.status,
                    name: listOfCodes.find((code) => code.code === response.status).name,
                    isBad: response.status >= 400 ? true : false,
                }
            });
        }
        return statusCodes;
    }
}

module.exports = new Status();
