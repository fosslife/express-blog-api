const DB = require('./db');


const methods = {
    insert  : DB.insert,
    find    : DB.find,
    findAll : () => DB.find({}),
    findOne : DB.findOne 
};

module.exports = methods;
