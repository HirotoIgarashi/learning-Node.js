const fs = require("fs");
const assert = require("assert");
const testFunction = () => 0;
function Ninja() {}
var ninja = new Ninja();

// predicate.jsのテスト
const lessOrEqual = require("../lib/predicate").lessOrEqual;
const isArray = require("../lib/predicate").isArray;
const isObject = require("../lib/predicate").isObject;
const isFunction = require("../lib/predicate").isFunction;
const isFinite = require("../lib/predicate").isFinite;
const isZipCodeJp = require("../lib/predicate").isZipCodeJp;
const isNaN = require("../lib/predicate").isNaN;
const isNull = require("../lib/predicate").isNull;

const createDataBase = require("../lib/sqlite3").createDataBase;
const isExistsDataBase = require("../lib/sqlite3").isExistsDataBase;
const deleteDataBase = require("../lib/sqlite3").deleteDataBase;

const parseJSONSync = require("../lib/json.js").parseJSONSync;
const parseJSONAsync = require("../lib/json.js").parseJSONAsync;
const parseJSONAsyncCallback = require("../lib/json.js").parseJSONAsyncCallback;
const parseJSONSyncWithCache = require("../lib/json.js").parseJSONSyncWithCache;
const parseJSONAsyncWithCache =
    require("../lib/json.js").parseJSONAsyncWithCache;

describe("fsのテスト", () => {
    describe("writeFile", () => {
        it("エラーなしで実行できる", (done) => {
            fs.writeFile("hello.txt", "Hello world", (err) =>
                err ? done(err) : done(),
            );
        });
    });
});

describe("predicate関数のテスト", () => {
    it("より小さいかイコールか 1 < 2なのでtrue", () => {
        assert.equal(lessOrEqual(1, 2), true);
    });
    it("より小さいかイコールか 2 < 1なのでfalse", () => {
        assert.equal(lessOrEqual(2, 1), false);
    });
    it("より小さいかイコールか 1 = 1なのでtrue", () => {
        assert.equal(lessOrEqual(1, 1), true);
    });
    it("[]が配列(Array)かどうか", () => {
        assert.equal(isArray([]), true);
    });
    it("{}が配列(Array)かどうか", () => {
        assert.equal(isArray({}), false);
    });
    it("オブジェクトかどうか", () => {
        assert.equal(isObject(ninja), true);
    });
    it("関数かどうか", () => {
        assert.equal(isFunction(testFunction), true);
    });
    it("有限数かどうか", () => {
        assert.equal(isFinite(1), true);
    });
    it("有限数かどうか", () => {
        assert.equal(isFinite(NaN), false);
    });
    it("郵便番号かどうか", () => {
        assert.equal(isZipCodeJp("135-0004"), true);
    });
    it("NaNが不定値(NaN(not-a-number)かどうか", () => {
        assert.equal(isNaN(NaN), true);
    });
    it("nullがnullかどうか", () => {
        assert.equal(isNull(null), true);
    });
    it("0がnullかどうか", () => {
        assert.equal(isNull(0), false);
    });
    it("Number.NaNが不定値(NaN(not-a-number)かどうか", () => {
        assert.equal(isNaN(Number.NaN), true);
    });
    it("0/0が不定値(NaN(not-a-number)かどうか", () => {
        assert.equal(isNaN(0 / 0), true);
    });
});
// テンプレート
// describe("Level1", () => {
//     describe("Level2", () => {
//         it("Level3", () => {
//         });
//     });
// });

// sqlite3.jsのテスト
const dataBaseName = "test.sqlite3";

describe("sqlite3のテスト", () => {
    describe("create Table and Insert Data", () => {
        it("エラーなしで実行できる", (done) => {
            const sqlite3 = require("sqlite3").verbose();
            const db = new sqlite3.Database(":memory:");

            db.serialize(() => {
                db.run("CREATE TABLE lorem (info TEXT)");

                const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
                for (let i = 0; i < 10; i++) {
                    stmt.run("Ipsum " + i);
                }
                stmt.finalize();

                db.each("SELECT rowid AS id, info FROM lorem", (_err, row) => {
                    console.log(row.id + ": " + row.info);
                });
            });
            db.close();
            done();
        });
    });
    describe("create dataBase", () => {
        after(() => {
            deleteDataBase(dataBaseName);
        });
        it("createDataBaseがエラーなしで実行できる", (done) => {
            createDataBase(dataBaseName);
            done();
        });
        it("isExistsDataBaseのリターンコードがtrueかどうか", () => {
            assert.equal(isExistsDataBase(dataBaseName), true);
        });
    });
    describe("delete dataBase", () => {
        // ToDo: 非同期処理を意識して書き換える必要がある
        after(() => {
            if (isExistsDataBase(dataBaseName)) {
                deleteDataBase(dataBaseName);
            }
        });
        it("createDataBaseがエラーなしで実行できる", (done) => {
            createDataBase(dataBaseName);
            done();
        });
        it("isExistsDataBaseがエラーなしで終了する", () => {
            assert.equal(isExistsDataBase(dataBaseName), true);
        });
        it("deleteDataBaseがエラーなしで実行できる", (done) => {
            deleteDataBase(dataBaseName);
            done();
        });
        it("isExistsDataBaseがエラーで終了する", () => {
            assert.equal(isExistsDataBase(dataBaseName), false);
        });
    });
});

// Asynchronous(非同期) Programmingのテスト
// Asynchronousの反意語はSynchronous
describe("Asynchronous Programming", () => {
    describe("callback", () => {
        it("setTimeout", (done) => {
            setTimeout(() => {
                console.log("１秒経過しました。");
            }, 1000);
            console.log("setTimeout()を実行しました。");
            done();
        });
        it("fs.readdir()", (done) => {
            fs.readdir(".", (err, files) => {
                console.log("fs.readdir()実行結果");
                console.log("err", err);
                console.log("files", files);
            });
            done();
        });
        it("parseJSONSync", (done) => {
            parseJSONSync('{"message": "Hello", "to": "World"}');
            done();
        });
        it("parseJSONAsyncCallback", (done) => {
            parseJSONAsyncCallback("不正なJSON", (err, result) => {
                console.log("parse結果", err, result);
            });
            done();
        });
        it("parseJSONSyncWithCache", (done) => {
            // const cache2 = {};
            parseJSONSyncWithCache(
                '{"message": "Hello", "to": "World"}',
                (err, result) => {
                    console.log("１回目の結果", err, result);
                    // コールバックの中で２回目を実行
                    parseJSONSyncWithCache(
                        '{"message": "Hello", "to": "World"}',
                        (err, result) => {
                            console.log("２回目の結果", err, result);
                        },
                    );
                    console.log("２回目の呼び出し完了");
                },
            );
            console.log("１回目の呼び出し完了");
            done();
        });
        it("parseJSONAsyncWithCache", (done) => {
            parseJSONAsyncWithCache(
                '{"message": "Hello", "to": "World"}',
                (err, result) => {
                    console.log("１回目の結果", err, result);
                    // コールバックの中で２回目を実行
                    parseJSONAsyncWithCache(
                        '{"message": "Hello", "to": "World"}',
                        (err, result) => {
                            // コールバックの中で２回目の結果
                            console.log("２回目の結果", err, result);
                        },
                    );
                    console.log("２回目の呼び出し完了");
                },
            );
            console.log("１回目の呼び出し完了");
            done();
        });
    });
    describe("Promise", () => {
        it("parseJSONAsync", (done) => {
            const toBeFullFilled = parseJSONAsync("{foo}: 1");
            const toBeFullRejected = parseJSONAsync("不正なJSON");
            console.log("************ Promise生成直後 ************");
            console.log(toBeFullFilled);
            console.log(toBeFullRejected);
            setTimeout(() => {
                console.log("************ １秒後 ************");
                console.log(toBeFullFilled);
                console.log(toBeFullRejected);
            }, 1000);
            done();
        });
    });
});
