const router = require('express').Router();
const { blogs } = require('../core');

router.get("/:name", (req, res) => {
    const doc = blogs.getBlogByName(req.params.name);
    res.json(doc).end();
});

router.post('/register', (req, res) => {
    const data = req.body;
    blogs.registerBlog(data);
    res.end("Registered new Blog successfully!");
})


module.exports = router;
