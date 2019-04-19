const db = require('./db');


const methods = {
    insert  : db.prepare("INSERT INTO Author(Name, Bio) VALUES(?, ?) "),
    findAllAuthors    : () => db.prepare("SELECT * FROM Author"),
    findAuthorByName    : () => db.prepare("SELECT * FROM Author WHERE name = ?"),
};

module.exports = methods;
