const { endpointsQueue } = require("../queue-config");
const MongoDbConnect = require("../models");
const Endpoint = require("../models/endpoint");
const axios = require("axios");
const {performance} = require("perf_hooks");

(async() => {
    await MongoDbConnect();
    console.log("Worker running...");
    endpointsQueue.process(async function EndpointsWorker(task) {
        let endpoint = task.data;
        let t0 = performance.now();
        await axios.default.get(endpoint.url);
        let t1 = performance.now();
        let diff = (t1 - t0).toFixed(2);
        let dbEndpoint = await Endpoint.findById(endpoint._id);
        dbEndpoint.snapshots.push({
            time: diff,
            createdAt: new Date()
        });
        await Endpoint.updateOne({_id: endpoint._id}, dbEndpoint.toJSON());
        console.log(`Request handled in ${diff}ms`);
    });
})();
