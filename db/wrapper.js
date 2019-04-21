const db = require("./db");

// Blog Queries
const registerBlog = db.prepare("INSERT INTO Blog(Title, Description) VALUES(?, ?)");

const getBlogByName = db.prepare("SELECT * FROM Blog WHERE lower(Title) = ?");

// Post queries
const registerPost = db.prepare("INSERT INTO Post(Title, Body, Tags, Slug, Category, Create_Date, excerpt, Preview_Image, Author_ID, Blog_ID) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

const getPostByTags = db.prepare(`SELECT * FROM Post WHERE Tags LIKE lower(%?%)`);

// Author queries
const getAuthorByName = db.prepare("SELECT * FROM Author WHERE lower(Name) = ? ");

const registerAuthor = db.prepare("INSERT INTO Author(Name, Bio) VALUES(?, ?);");

const getAllAuthors = db.prepare("SELECT DISTINCT(Name), Bio from Author");

module.exports = {
    registerBlog,
    getBlogByName,
    registerPost,
    getPostByTags,
    getAuthorByName,
    registerAuthor,
    getAllAuthors,
};
