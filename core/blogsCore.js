const dbInstance = require("../db");

const registerBlog = data => {
    const { Title, Description } = data;
    return dbInstance.registerBlog.run(Title, Description);
};

const getBlogByName = name => {
    return dbInstance.getBlogByName.get(name.toLowerCase());
};

module.exports = {
    registerBlog,
    getBlogByName,
};