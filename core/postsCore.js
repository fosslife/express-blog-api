const dbInstance = require("../db");

const createPost = payload => {
    console.log(payload);
    const { title, slug, author, date, excerpt, preview, post, tags, blog } = payload;

    return {};
};

module.exports = {
    createPost,
};