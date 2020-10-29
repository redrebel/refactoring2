const { describe } = require("mocha");
const { expect } = require("chai");

describe("1102 Parameterize Function - before", () => {
  const baseCharge = require("../before");

  it("test1", () => {
    expect(baseCharge(-1)).equals("0원");
  });

  it("test2", () => {
    expect(baseCharge(0)).equals("0원");
  });

  it("test3", () => {
    expect(baseCharge(100)).equals("3원");
  });

  it("test4", () => {
    expect(baseCharge(200)).equals("8원");
  });

  it("test5", () => {
    expect(baseCharge(300)).equals("15원");
  });
});

describe("1102 Parameterize Function - after1", () => {
  const baseCharge = require("../after1");
  it("test1", () => {
    expect(baseCharge(-1)).equals("0원");
  });

  it("test2", () => {
    expect(baseCharge(0)).equals("0원");
  });

  it("test3", () => {
    expect(baseCharge(100)).equals("3원");
  });

  it("test4", () => {
    expect(baseCharge(200)).equals("8원");
  });

  it("test5", () => {
    expect(baseCharge(300)).equals("15원");
  });
});
