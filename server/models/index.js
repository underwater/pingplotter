const mongoose = require("mongoose");
const Endpoint = require("./endpoint");

module.exports = function MongoDbConnect() {
    return mongoose.connect('mongodb://root:abc123@localhost:27017/pingplotter', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        authSource: "admin"
    });
}
