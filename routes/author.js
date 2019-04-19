const router = require("express").Router();
const db = require('../db');



router.get("/", (req, res) => {
    const doc = db.findAuthorByName(req.params.author);
    res.json(doc).end();
});

router.post('/', (req, res) => {
    const authorData = req.body;
    const doc = d
})


module.exports = router;
