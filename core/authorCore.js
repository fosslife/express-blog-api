const dbInstance = require('../db');

const registerAuthor = data => {
    const { name, bio } = data;
    return dbInstance.registerAuthor.run(name, bio);
};

const getAllAuthors = () => {
    return dbInstance.getAllAuthors.all();
}

const getAuthorByName = name => {
    return dbInstance.getAuthorByName.get(name.toLowerCase());
}

module.exports = {
    registerAuthor,
    getAllAuthors,
    getAuthorByName,
}