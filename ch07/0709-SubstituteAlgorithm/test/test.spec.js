const { describe } = require("mocha");
const { expect } = require("chai");

const func_before = require("../before");
const func_after = require("../after");

describe("0709-Substitute Algorithm", function () {
  it("test", function () {
    const people = ["Don1", "John", "Kent1"];

    expect(func_before(people)).equals(func_after(people));
  });
});
