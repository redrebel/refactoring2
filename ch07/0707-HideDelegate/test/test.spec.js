const { describe } = require("mocha");
const { expect } = require("chai");
const Person_before = require("../before");
const Person_after = require("../after");

describe("0707-Hide Delegate", function () {
  it("test", function () {
    const manager = "이정근";
    const before = new Person_before("before");
    before.department = {
      manager: manager,
    };
    const after = new Person_after("after");
    after.department = { manager: manager };

    expect(before.department.manager).equals(after.manager);
  });
});
