const dbOptions = {
    verbose: console.log
}

const db = require('better-sqlite3')('storage/posts.db', dbOptions);
db.pragma('journal_mode = WAL');

module.exports = db;
