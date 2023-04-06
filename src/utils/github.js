const { Octokit } = require("@octokit/core");
const dotenv = require("dotenv");
dotenv.config();

const octokit = new Octokit({
    auth: `${process.env.github_token}`,
})


class github {
    constructor() {
        this.octokit = octokit;
    }

    async getRepos() {
        const { data } = await this.octokit.request("GET /user/repos");
        return data;
    }

    async getPublicRepos() {
        const { data } = await this.octokit.request("GET /users/{owner}/repos", {
            owner: "zenithvt",
        });

        return data;
    }

    async getUser() {
        const { data } = await this.octokit.request("GET /user");
        return data;
    }

    async getPinnedRepos() {
        let list = [];

        // Get the repos that have the "pinned" topic but only for the ones that the user owns
        const { data } = await this.octokit.request("GET /search/repositories", { q: "topic:pinned+user:zenithvt" });

        // Loop through the repos and add them to the list
        data.items.forEach((repo) => {
            list.push(repo);
        });

        return list;
    }
}

module.exports = github;