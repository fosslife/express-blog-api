const router = require("express").Router();
const { author } = require('../core');

router.get("/", (req, res) => {
    const doc = author.getAllAuthors();
    res.json(doc).end();
});

router.get("/:name", (req, res) => {
    const { name } = req.params;
    const doc = author.getAuthorByName(name);
    res.json(doc).end();
});

router.post('/register', (req, res) => {
    const data = req.body;
    author.registerAuthor(data);
    res.end("Registered new author successfully!");
})


module.exports = router;
