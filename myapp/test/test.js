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

describe("fs", () => {
    describe("writeFile", () => {
        it("エラーなしで実行できる", (done) => {
            fs.writeFile("hello.txt", "Hello world", (err) =>
                err ? done(err) : done(),
            );
            // またはよりシンプルに
            // fs.writeFile('hello.txt', 'Hello world', done);
        });
    });
});
describe("predicate", () => {
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
