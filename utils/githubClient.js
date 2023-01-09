const { Octokit } = require("@octokit/core");
const config = require("../config");
const dotenv = require("dotenv");
dotenv.config();

const octokit = new Octokit({
    auth: `${process.env.githubToken}`,
  })


class githubClient {
    constructor() {
        this.octokit = octokit;
    }

    async getRepos() {
        // Get all public repos for the authenticated user
        const { data } = await this.octokit.request("GET /user/repos");
        return data;
    }
}

module.exports = githubClient;
