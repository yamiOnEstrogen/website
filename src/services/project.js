const fs = require('fs');
const path = require('path');

const projects = path.join(__dirname, '..', 'projects');
const projectsFiles = fs.readdirSync(projects).filter((file) => file.endsWith('.json'));




class Project {
    constructor() {}

    async getProjects() {
        let list = [];

        projectsFiles.forEach((file) => {
            const data = fs.readFileSync(path.join(projects, file));
            const json = JSON.parse(data);
            list.push(json);
        });

        return list;
    }
}

module.exports = Project;