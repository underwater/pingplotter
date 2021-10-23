// web process: process that is exposed to the internet (port 80). Express API
// worker process: background worker processing the jobs

const Queue = require('bull');

const endpointsQueue = new Queue('endpoints', {
     redis: {
        port: 6390,
        host: '127.0.0.1' 
    } 
});

module.exports = {
    endpointsQueue
};