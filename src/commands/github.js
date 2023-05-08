const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
    auth: `${process.env.GITHUB_TOKEN}`
})


module.exports = {
    name: 'github',
    description: 'Link to the GitHub repository',
    canBeExecuted: false,
    async execute(message, args) {
        
        const repo = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: '0xhylia',
            repo: 'zenithlive.lol'
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });

        const language = () => {
            if (repo.language == null) {
                return `<i class="bi bi-files"></i>`
            } else {
                return `<i class="bi bi-filetype-${repo.language.toLowerCase()}"></i> (${repo.language})`;
            }
        };

        return `<h1>✨ GitHub Repository ✨</h1>
        <p>Here is the link to the GitHub repository:</p>.
        <ul>
            <li><i class="bi bi-arrow-return-right"></i> <b>Name:</b> ${repo.name} - <b>Link:</b> <a href="${repo.html_url}">${repo.html_url}</a></li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Stars:</b> ${repo.stargazers_count}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Forks:</b> ${repo.forks_count}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Watchers:</b> ${repo.watchers_count}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Language:</b> ${language()}</li>
        </ul>
        `;

    }
}