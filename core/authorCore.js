const dbInstance = require("../db");

const registerAuthor = data => {
    const { Name, Bio } = data;
    return dbInstance.registerAuthor.run(Name, Bio);
};

const getAllAuthors = () => {
    return dbInstance.getAllAuthors.all();
};

const getAuthorByName = name => {
    return dbInstance.getAuthorByName.get(name.toLowerCase());
};

module.exports = {
    registerAuthor,
    getAllAuthors,
    getAuthorByName,
};