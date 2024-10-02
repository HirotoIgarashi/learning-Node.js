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
    it("1 + 2で3を返す", () => {
        assert.equal(predicate.add(1, 2), 3);
    });
});
