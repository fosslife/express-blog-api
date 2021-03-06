const router = require("express").Router();
const { author } = require("../core");

/**
 * Get all authors
 */
router.get("/", (req, res) => {
    const doc = author.getAllAuthors();
    res.json(doc).end();
});

/**
 * get author by name
 */
router.get("/:name", (req, res) => {
    const { name } = req.params;
    const doc = author.getAuthorByName(name);
    res.json(doc).end();
});

/**
 * register author
 */
router.post("/register", (req, res) => {
    const data = req.body;
    author.registerAuthor(data);
    res.end("Registered new author successfully!");
});


module.exports = router;
