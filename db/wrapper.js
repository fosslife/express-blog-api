const db = require('./db');


const createPost = payload => {
    db.prepare("INSERT INTO Post(Title, Body, Tags, Category, Create_Date, excerpt, Preview_Image, Author_ID, Blog_ID) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)")
}

const findAuthorByName = name => {
    return db.prepare("SELECT * FROM Author WHERE lower(Name) = ? ").all(name.toLowerCase());
}

const registerAuthor = data => {
    return db.prepare(`INSERT INTO Author(Name, Bio) VALUES(?, ?);`).run(data)
}
module.exports = {
    createPost,
    registerAuthor,
    findAuthorByName,
};
