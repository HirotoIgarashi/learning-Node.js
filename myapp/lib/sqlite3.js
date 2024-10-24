const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database(':memory:');

module.exports.isExistsDataBase = (fileName) => {
    try {
        fs.accessSync(fileName, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        console.log("err_code: " + err.code);
        return false;
    }
    return true;
};

module.exports.createDataBase = (fileName) => {
    const db = new sqlite3.Database(
        fileName,
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    );
    return db;
};

module.exports.deleteDataBase = (fileName) => {
    if (fs.rmSync(fileName)) {
        return true;
    }
    return false;
};

modul.exports.createTable = (db, tableName) => {
    db.serialize(() => {
        db.run(`CREATE TABLE ${tableName} (info TEXT)`);
    });
    return db;
};
