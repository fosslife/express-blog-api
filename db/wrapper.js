const db = require("./db");

// Blog Queries
const registerBlog = db.prepare("INSERT INTO Blog(Title, Description) VALUES(?, ?)");

const getBlogByName = db.prepare("SELECT * FROM Blog WHERE lower(Title) = ?");

// Post queries
const registerPost = db.prepare("INSERT INTO Post(Title, Body, Tags, Slug, Category, Create_Date, excerpt, Preview_Image, Author_ID, Blog_ID) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

const getPostByTags = db.prepare("SELECT * FROM Post WHERE Tags LIKE lower(?) AND Blog_ID=(SELECT ID FROM Blog where Title=?)");

const getPostBySlug = db.prepare("SELECT * FROM Post WHERE slug=?");

const getPostByAuthor = db.prepare("SELECT * FROM Post WHERE Author_ID=(SELECT ID FROM Author WHERE lower(Name)=?)");

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
    getPostBySlug,
    getAuthorByName,
    registerAuthor,
    getAllAuthors,
    getAuthorAndBlogID
};
