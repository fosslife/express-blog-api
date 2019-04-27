const db = require("./db");

// Blog Queries
const registerBlog = db.prepare("INSERT INTO Blog(Title, Description) VALUES(?, ?)");

const getBlogByName = db.prepare("SELECT * FROM Blog WHERE lower(Title) = ?");

// Post queries
const registerPost = db.prepare("INSERT INTO Post(Title, Body, Tags, Slug, Category, Create_Date, excerpt, Preview_Image, Author_ID, Blog_ID) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

const getPostByTags = db.prepare("SELECT Post.* FROM Post INNER JOIN Blog ON Post.Blog_ID = Blog.ID WHERE Blog.Title=? AND Post.tags like ?");

const getPostBySlug = db.prepare("SELECT Post.* FROM Post INNER JOIN Blog ON Post.Blog_ID = Blog.ID WHERE Post.slug=? AND Blog.Title=?");

const getPostByAuthor = db.prepare("SELECT Post.* FROM Post INNER JOIN Author ON Post.Author_ID = Author.ID INNER JOIN Blog ON Post.Blog_ID = Blog.ID WHERE lower(Author.name) =? AND Blog.Title = ?");

const getAllPosts = db.prepare("SELECT Post.* FROM Post INNER JOIN Blog On Post.Blog_ID = Blog.ID WHERE Blog.Title = ?");

const getAllPostsWithLimit = db.prepare("SELECT Post.* FROM Post INNER JOIN Blog On Post.Blog_ID = Blog.ID WHERE Blog.Title = ? LIMIT ? OFFSET ?");

// Author queries
const getAuthorByName = db.prepare("SELECT * FROM Author WHERE lower(Name) = ? ");

const registerAuthor = db.prepare("INSERT INTO Author(Name, Bio) VALUES(?, ?);");

const getAllAuthors = db.prepare("SELECT DISTINCT(Name), Bio from Author");

// Misc.
const getAuthorAndBlogID = db.prepare("SELECT author.ID as authorId, blog.ID as blogId FROM Author as author, Blog as blog WHERE lower(author.Name)=? AND lower(blog.Title)=?");


module.exports = {
    registerBlog,
    getBlogByName,
    registerPost,
    getPostByTags,
    getPostByAuthor,
    getAllPosts,
    getAllPostsWithLimit,
    getPostBySlug,
    getAuthorByName,
    registerAuthor,
    getAllAuthors,
    getAuthorAndBlogID
};
