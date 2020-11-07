const { describe } = require("mocha");
const { expect } = require("chai");

describe("1111 Return Modified Value", () => {
  it("before", () => {
    const totalAscent = require("../before");
    expect(totalAscent).equals(3);
  });

  it("after1", () => {
    const totalAscent = require("../after1");
    expect(totalAscent).equals(3);
  });
});
