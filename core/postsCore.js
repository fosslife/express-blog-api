const dbInstance = require("../db");

const createPost = payload => {
    const { title, slug, author, excerpt, preview, post, tags, blog, category } = payload;
    const { authorId, blogId } = dbInstance.getAuthorAndBlogID.get(author.toLowerCase(), blog.toLowerCase());
    const createDate = new Date().getTime();

    const r = dbInstance.registerPost.run(
        title,                       // Title
        post,                        // Body
        tags.join(),                 // Tags, nullable
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

const getPostByTags = (blog, tags) => {
    return dbInstance.getPostByTags.all(`%${tags}%`, blog);
};

const getPostByAuthor = name => {
    return dbInstance.getPostByAuthor.all(name.toLowerCase());
};

const getPostBySlug = slug => {
    return dbInstance.getPostBySlug.all(slug.toLowerCase());
};

module.exports = {
    createPost,
    getPostByTags,
    getPostByAuthor,
    getPostBySlug,
};