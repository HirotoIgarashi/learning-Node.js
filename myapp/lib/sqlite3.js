const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database(':memory:');

module.exports.createDataBase = (fileName) => {
    const db = new sqlite3.Database(
        fileName,
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    );
    return db;
};

module.exports.isExistDataBase = (dataBaseName) => {
    const db = new sqlite3.Database(dataBaseName);
    return db;
};

module.exports.createTable = (db, tableName) => {
    db.serialize(() => {
        db.run(`CREATE TABLE ${tableName} (info TEXT)`);
    });
    return db;
};
