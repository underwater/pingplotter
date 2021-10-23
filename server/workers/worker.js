const { endpointsQueue } = require("../queue-config");
const MongoDbConnect = require("../models");

(async() => {
    await MongoDbConnect();
    endpointsQueue.process(async function EndpointsWorker(task) {
        let endpoint = task.data;
        console.log("Endpoints worker data: ", endpoint);
    });
})();
