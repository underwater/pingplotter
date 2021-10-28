const router = require("express").Router();
const Endpoint = require("../models/endpoint");
const { endpointsQueue } = require("../queue-config");

router.get("", (req, res, next) => {
    Endpoint.find({}).then(rows => res.send(rows)).catch(next);
})

router.post("",  async (req, res, next) => {
    try {
        let existing = await Endpoint.findOne({
            name: req.body.name
        });
        if (existing) {
            await endpointsQueue.add(existing, {
                attempts: 3
            });
            return res.send(existing);
        }
        else {
            let created = await Endpoint.insertMany([req.body]);
            let endpoint = created[0];
            await endpointsQueue.add(endpoint, {
                attempts: 3,
                repeat: {cron: "* * * * *"}
            });
            return res.send(endpoint);
        }
    }
    catch (err) {
        if (err.message && err.message.includes("duplicate")) {
            return res.status(400).send("Duplicate entry");
        }
        else {
            return next(err);
        }
    }
});

router.delete("/:id", (req, res, next) => {
    Endpoint.remove({
        _id: req.params.id
    }).then(() => res.json({status: "ok"}))
    .catch(err => next(err));
});

module.exports = router;


