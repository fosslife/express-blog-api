const r = require("express").Router();
const { posts } = require("../core");
const validateRequest = require("../utils/validateRequests");

r.post("/register", (req, res) => {
    const payload = req.body;
    const doc = posts.createPost(payload);
    res.json(doc);
});

r.get("/:blog/tag/:tag", (req, res) => {
    const { blog, tag } = req.params;
    const doc = posts.getPostByTags(blog, tag);
    res.json(doc);
});

r.get("/:blog/author/:author", (req, res) => {
    const { blog, author } = req.params;
    const doc = posts.getPostByAuthor(blog, author);
    res.json(doc);
});

r.get("/:blog/:slug", async (req, res) => {
    const { blog, slug } = req.params;
    const doc = posts.getPostBySlug(blog, slug);
    res.json(doc);
});

module.exports = r;
