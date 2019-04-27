const r = require("express").Router();
const { posts } = require("../core");
const validateRequest = require("../utils/validateRequests");

r.post("/register", (req, res) => {
    const payload = req.body;
    const doc = posts.createPost(payload);
    res.json(doc);
});

r.get("/tag/:tag", (req, res) => {
    const doc = posts.getPostByTags(req.params.tag);
    res.json(doc);
});

r.get("/author/:author", (req, res) => {
    const doc = posts.getPostByAuthor(req.params.author);
    res.json(doc);
});

r.get("/:slug", async (req, res) => {
    const doc = posts.getPostBySlug(req.params.slug);
    res.json(doc);
});

module.exports = r;
