const router = require("express").Router();
const Endpoint = require("../models/endpoint");

router.get("", (req, res, next) => {
    Endpoint.find({}).then(rows => res.send(rows)).catch(next);
})

router.post("", (req, res, next) => {
    Endpoint.insertMany([req.body]).then(created => {
        res.send(created[0]);
    }).catch(next);
});

router.delete("/:id", (req, res, next) => {
    Endpoint.remove({
        _id: req.params.id
    }).then(() => res.sendStatus(200)).catch(err => next(err));
});

module.exports = router;