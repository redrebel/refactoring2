const { describe, it } = require("mocha");
const { expect } = require("chai");
const discount_before = require("../discount/before");
const discount_after1 = require("../discount/after1");
const discount_after2 = require("../discount/after2");

describe("0901 Split Variable - discount", () => {
  const inputValue = 60;
  it("after1", () => {
    expect(discount_before(inputValue)).equals(discount_after1(inputValue));
  });

  it("after2", () => {
    expect(discount_before(inputValue)).equals(discount_after2(inputValue));
  });
});
