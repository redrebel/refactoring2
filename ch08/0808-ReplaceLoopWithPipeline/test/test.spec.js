const { describe } = require("mocha");
const { expect } = require("chai");
const input = require("../input");
const acquireData_before = require("../before");

describe("0808 Replace Loop with Pipeline", () => {
  it("after1", () => {
    console.log(acquireData_before(input));
  });
});
