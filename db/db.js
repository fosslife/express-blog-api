const datastore = require('nedb-promise');

const DB = datastore({
    filename: 'storage/db.json',
    autoload: true
});

module.exports = DB;
