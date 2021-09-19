const express = require("express");
const MongoDbConnect = require("./models");
const { MiddlewareSetup } = require("./middleware");

const EndpointsController = require("./controllers/endpoints.controller");

(async() => {
    try {
        // Boot 
        await MongoDbConnect();
        const app = express();
        // End of boot

        // Middleware
        MiddlewareSetup(app);
        // End of middleware

        // Controller configuration
        app.use("/api/endpoints", EndpointsController);

        app.listen(3000, () => {
            console.log(`Server listening on port 3000`);
        });
    }
    catch (e) {
        console.log("FATAL ERROR: ", e);
    }
})();