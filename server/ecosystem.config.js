module.exports = {
    apps: [{
        name: "web",
        script: 'index.js',
        watch: true,
        ignore_watch: ["./workers/"],
        exec_mode: "cluster",
        instances: "2",
        env: {

        }
    }, {
        name: "worker",
        script: './workers/index.js',
        watch: true,
        exec_mode: "cluster",
        instances: "4",
        env: {}
    }]
};
