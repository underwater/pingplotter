const express = require("express");
const MongoDbConnect = require("./models");
const morgan = require("morgan");
const cors = require("cors");

const EndpointsController = require("./controllers/endpoints.controller");

(async() => {
    try {
        await MongoDbConnect();
        const app = express();
        app.use(express.json());
        app.use(morgan("short"));
        app.use(cors());

        app.use("/api/endpoints", EndpointsController);

        app.listen(3000, () => {
            console.log(`Server listening on port 3000`);
        });
    }
    catch (e) {
        console.log("FATAL ERROR: ", e);
    }
})();