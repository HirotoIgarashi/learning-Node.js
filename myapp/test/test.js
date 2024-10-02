const fs = require("fs");
const predicate = require("../lib/predicate");
const assert = require("assert");

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
    it("数値を比較する", () => {
        assert.equal(predicate.lessOrEqual(1, 2), true);
    });
    it("数値を比較する", () => {
        assert.equal(predicate.lessOrEqual(2, 1), false);
    });
    it("数値を比較する", () => {
        assert.equal(predicate.lessOrEqual(1, 1), true);
    });
});
