const router = require("express").Router();
const { blogs } = require("../core");

/**
 * Get blog by name
 */
router.get("/:name", (req, res) => {
    const doc = blogs.getBlogByName(req.params.name);
    res.json(doc).end();
});

/**
 * Register blog
 */
router.post("/register", (req, res) => {
    const data = req.body;
    blogs.registerBlog(data);
    res.end("Registered new Blog successfully!");
});


module.exports = router;
