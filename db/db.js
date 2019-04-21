const dbOptions = {
    verbose: console.log
};

const db = require("better-sqlite3")("storage/posts.db", dbOptions);
db.pragma("journal_mode = WAL");

db.prepare(`
CREATE TABLE IF NOT EXISTS Blog (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL
);
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS Author(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Bio TEXT NOT NULL
);
`).run();


db.prepare(`
CREATE TABLE IF NOT EXISTS Post (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Body TEXT NOT NULL,
    Tags TEXT,
    Category TEXT,
    Create_Date TEXT NOT NULL,
    excerpt TEXT,
    Preview_Image TEXT,
    Author_ID INTEGER NOT NULL,
    Blog_ID INTEGER NOT NULL,
    FOREIGN KEY (Blog_ID) REFERENCES Blog(ID),
    FOREIGN KEY (Author_ID) REFERENCES Author(ID)   
);
`).run();

// db.prepare(`INSERT INTO Blog(Title, Description) VALUES("Fosslife", "A Blog of randomness");`).run();

module.exports = db;
