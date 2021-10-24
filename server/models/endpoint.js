const mongoose = require("mongoose");

const EndpointSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true
    },
    url: {
        type: String,
        index: true,
        unique: true
    },
    snapshots: {
        type: Array,
        default: []
    }
});

const Endpoint = mongoose.model("Endpoint", EndpointSchema);

module.exports = Endpoint;