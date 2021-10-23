const router = require("express").Router();
const Endpoint = require("../models/endpoint");
const { endpointsQueue } = require("../queue-config");

router.get("", (req, res, next) => {
    Endpoint.find({}).then(rows => res.send(rows)).catch(next);
})

router.post("", (req, res, next) => {
    var state = {};
    Endpoint.insertMany([req.body]).then(created => {
        let endpoint = created[0];
        state.endpoint = endpoint;
        return endpointsQueue.add(endpoint, {
            attempts: 3
        });
    }).then(() => {
        return res.send(state.endpoint);
    }).catch(next);
});

router.delete("/:id", (req, res, next) => {
    Endpoint.remove({
        _id: req.params.id
    }).then(() => res.sendStatus(200)).catch(err => next(err));
});

module.exports = router;