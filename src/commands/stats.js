module.exports = {
    name: 'stats',
    description: 'Shows the stats of the process',
    canBeExecuted: false,
    execute(message, args) {
       
        const used = process.memoryUsage().heapUsed / 1024 / 1024;

        const cpu = process.cpuUsage().system / 1024 / 1024;

        const uptime = () => {
            const totalSeconds = process.uptime();

            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const minutes = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds % 60);

            return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        };


        return `<h1> 📊 Stats 📊 </h1>
        <p>Here is a list of all the stats:</p>
        <ul>
            <li><i class="bi bi-alarm"></i> <b>Uptime:</b> ${uptime()}</li>
            <li><i class="bi bi-motherboard"></i> <b>Memory Usage:</b> ${Math.round(used * 100) / 100} MB</li>
            <li><i class="bi bi-server"></i> <b>CPU Usage:</b> ${Math.round(cpu * 100) / 100} MB</li>
        </ul>
        `;

    }
}