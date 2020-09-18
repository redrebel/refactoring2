const { describe } = require("mocha");
const { expect } = require("chai");

const Account_before = require("../Account/before");

describe("0802 Move Field - Account", () => {
  it("after1", () => {
    const before = new Account_before(100, "A", 0.2);
    console.log(before.interestRate);
  });
});
