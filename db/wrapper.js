const db = require('./db');


const insertPost = db.prepare(`INSERT INTO Post(Title, Body, Tags, Category, Create_Date, excerpt, Preview_Image, Author_ID, Blog_ID) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`);

const getAuthorByName = db.prepare(`SELECT * FROM Author WHERE lower(Name) = ? `);

const registerAuthor = db.prepare(`INSERT INTO Author(Name, Bio) VALUES(?, ?);`);

const getAllAuthors = db.prepare(`SELECT DISTINCT(Name) from Author`);

module.exports = {
    insertPost,
    getAuthorByName,
    registerAuthor,
    getAllAuthors,
}
