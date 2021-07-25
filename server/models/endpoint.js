const mongoose = require("mongoose");

const EndpointSchema = new mongoose.Schema({
    name: String,
    url: String,
    snapshots: {
        type: Array,
        default: []
    }
});

const Endpoint = mongoose.model("Endpoint", EndpointSchema);

module.exports = Endpoint;