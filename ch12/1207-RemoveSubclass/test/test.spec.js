const { describe } = require("mocha");
const { expect } = require("chai");

describe("1207 Remove Subclass", () => {
  it("before", () => {
    const getNumberOfMales = require("../before");
    expect(getNumberOfMales()).equals(2);
  });

  it("after1", () => {
    const getNumberOfMales = require("../after1");
    expect(getNumberOfMales()).equals(2);
  });

  it("after2", () => {
    const getNumberOfMales = require("../after2");
    expect(getNumberOfMales()).equals(2);
  });

  it("after3", () => {
    const getNumberOfMales = require("../after3");
    expect(getNumberOfMales()).equals(2);
  });

  it("after4", () => {
    const getNumberOfMales = require("../after4");
    expect(getNumberOfMales()).equals(2);
  });

  it("after5", () => {
    const getNumberOfMales = require("../after5");
    expect(getNumberOfMales()).equals(2);
  });
});
