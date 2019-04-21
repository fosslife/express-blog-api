const dbInstance = require("../db");

const createPost = payload => {
    // console.log(payload);
    const { title, slug, author, excerpt, preview, post, tags, blog, category } = payload;
    const authorId = dbInstance.getAuthorByName.get(author.toLowerCase()).ID;
    const blogId = dbInstance.getBlogByName.get(blog.toLowerCase()).ID;
    const createDate = new Date().getTime();

    const r = dbInstance.registerPost.run(
        title,                       // Title
        post,                        // Body
        JSON.stringify(tags),        // Tags, nullable
        slug,                        // Slug
        category,                    // Category, nullable
        createDate,                  // Create_Date
        excerpt,                     // excerpt, nullable
        preview,                     // Preview_Image, nullable
        Number(authorId),            // Author_ID
        Number(blogId)               // Blog_ID
    );

    return r;
};

const getPostByTags = tags => {
    console.log(tags);
    return dbInstance.getPostByTags.all(tags);
}

module.exports = {
    createPost,
    getPostByTags,
};