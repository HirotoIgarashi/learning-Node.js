import fs from "fs";

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
