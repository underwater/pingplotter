const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

function MiddlewareSetup(app) {
    app.use(express.json());
    app.use(morgan("short"));
    app.use(cors());
}

module.exports = {
    MiddlewareSetup
};
