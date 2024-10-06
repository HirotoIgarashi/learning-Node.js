const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database(':memory:');

module.exports.createDataBase = (dataBaseName) => {
    const db = new sqlite3.Database(dataBaseName);
    db.close();
    return db;
};

module.exports.createTable = (db, tableName) => {
    db.serialize(() => {
        db.run(`CREATE TABLE ${tableName} (info TEXT)`);
    });
    db.close();
    return db;
};
