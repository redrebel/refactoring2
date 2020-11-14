const { describe } = require("mocha");
const { expect } = require("chai");

const name = "이정근";

describe("1203 Pull Up Constructor Body, Employee", () => {
  const Manager = require("../Employee/before");

  it("before", () => {
    const manager = new Manager(name, 10);
    expect(manager.isPrivileged).equals(true);
  });

  it("after1", () => {
    const manager = new Manager(name, 10);
    expect(manager.isPrivileged).equals(true);
  });
});
