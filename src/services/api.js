const express = require('express');
const router = express.Router();
const { webApp, owner } = require('../config.js');
const Project = require('./project');

router.get('/', async (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "API is working",
        version: webApp.version,
        allowedVersions: webApp.allowedApiVersions,
    });
});


router.get('/status', async (req, res) => {
    

    const convertUptime = (uptime) => {
        let seconds = uptime;
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds = Math.floor(seconds % 60);
        minutes = Math.floor(minutes % 60);
        hours = Math.floor(hours % 24);
        days = Math.floor(days);

        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    }

    res.status(200).json({uptime: convertUptime(process.uptime())});
});


router.get('/projects', async (req, res) => {
    

    const project = new Project();
    const projects = await project.getProjects();

    res.status(200).json({
        projects: projects,
    });

});

router.get('/config', async (req, res) => {
    

    res.status(200).json({
        owner: owner,
        webApp: webApp,
    });
});

router.get('/versions', async (req, res) => {
    res.status(200).json({
        versions: webApp.allowedApiVersions,
    });
})

module.exports = router;