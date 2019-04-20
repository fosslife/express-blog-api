const dbInstance = require('../db');

const registerBlog = data => {
    const { Title, Description } = data;
    return dbInstance.registerBlog.run(Title, Description);
};

const getBlogByName = name => {
    console.log("getting blogs by name", name);
    return dbInstance.getBlogByName.get(name.toLowerCase());
}

module.exports = {
    registerBlog,
    getBlogByName,
}