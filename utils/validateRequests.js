const validateRequest = () => {
    return (req, res, next) => {
        const { title, slug, author, post, blog, category } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        if (!post) {
            return res.status(400).json({ error: "Body cannot be empty" });
        }

        if (!slug) {
            req.body.slug = `${title.replace(/\s/g, "-")}-by-${author}`;
        }

        if (!category) {
            req.body.category = "Default";
        }

        if (!author) {
            return res.status(400).json({ error: "Author name cannot be empty" });
        }

        if (!blog) {
            return res.status(400).json({ error: "Blog name cannot be null" });
        }

        req.body.createDate = new Date().getTime();

        next();
    };
};

module.exports = validateRequest;

