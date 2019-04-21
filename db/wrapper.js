const db = require("./db");

const registerBlog = db.prepare("INSERT INTO Blog(Title, Description) VALUES(?, ?)");

const getBlogByName = db.prepare("SELECT * FROM Blog WHERE lower(Title) = ?");

const registerPost = db.prepare("INSERT INTO Post(Title, Body, Tags, Slug, Category, Create_Date, excerpt, Preview_Image, Author_ID, Blog_ID) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

const getAuthorByName = db.prepare("SELECT * FROM Author WHERE lower(Name) = ? ");

const registerAuthor = db.prepare("INSERT INTO Author(Name, Bio) VALUES(?, ?);");

const getAllAuthors = db.prepare("SELECT DISTINCT(Name), Bio from Author");

module.exports = {
    registerBlog,
    getBlogByName,
    registerPost,
    getAuthorByName,
    registerAuthor,
    getAllAuthors,
};
