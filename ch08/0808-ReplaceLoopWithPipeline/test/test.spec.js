const { describe } = require("mocha");
const { expect } = require("chai");
const input = require("../input");
const acquireData_before = require("../before");
const acquireData_after1 = require("../after1");
const acquireData_after2 = require("../after2");
const acquireData_after3 = require("../after3");
const acquireData_after4 = require("../after4");
const acquireData_after5 = require("../after5");
const acquireData_after6 = require("../after6");

describe("0808 Replace Loop with Pipeline", () => {
  it("after1", () => {
    expect(acquireData_after1(input)).deep.equals(acquireData_before(input));
  });
  it("after2", () => {
    expect(acquireData_after2(input)).deep.equals(acquireData_before(input));
  });
  it("after3", () => {
    expect(acquireData_after3(input)).deep.equals(acquireData_before(input));
  });
  it("after4", () => {
    expect(acquireData_after4(input)).deep.equals(acquireData_before(input));
  });
  it("after5", () => {
    expect(acquireData_after5(input)).deep.equals(acquireData_before(input));
  });
  it("after6", () => {
    expect(acquireData_after6(input)).deep.equals(acquireData_before(input));
  });
});
