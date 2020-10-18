const { describe, it } = require("mocha");
const { expect } = require("chai");

const getCharge_before = require("../before");
const getCharge_after1 = require("../after1");
const getCharge_after2 = require("../after2");

class Date {
  constructor(month) {
    this._month = month;
  }

  isBefore(start) {
    return this._month <= start;
  }

  isAfter(end) {
    return this._month >= end;
  }
}
describe("1001 Decompose Conditional", () => {
  const plan = {
    summerStart: 6,
    summerEnd: 9,
    summerRate: 2,
    regularRate: 1,
    regularServiceCharge: 10,
  };

  it("after1", () => {
    const aDate = new Date(7);
    charge_before = getCharge_before(aDate, plan, 2);
    expect(getCharge_after1(aDate, plan, 2)).equals(charge_before);
  });
  it("after2", () => {
    const aDate = new Date(7);
    const charge_before = getCharge_before(aDate, plan, 2);
    expect(getCharge_after2(aDate, plan, 2)).equals(charge_before);
  });
});
