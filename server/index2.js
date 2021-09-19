const express = require("express");
const port = 3000;

const app = express();

app.use(express.json({

})); // function() { return (req, res, next) => { req.body = JSON.parse(req.body);next()) } }

//?qry=123&a=1&b=2 -> { qry: "123", a: 1, b: 2 }
app.post("/api/endpoints/new/:id", (req, res, next) => {
    if (req.method != "POST") {
        return res.sendStatus(404);
    }
    const id = req.params.id;
    const qry = req.query.qry;
    const myHeader = req.headers.myheader;
    console.log(`myheader: ${myHeader}`);
    if (!qry) {
        res.sendStatus(400);
    }
    let endpoint = req.body; // {"id": 2, "description": "test"}

    // next();

    res.send({
        id,
        qry,
        endpoint,
        myHeader
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});