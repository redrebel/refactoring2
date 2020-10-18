const { describe, it } = require("mocha");
const { expect } = require("chai");

const disabilityAmount_before = require("../before")
const disabilityAmount_after1 = require("../after1")

class Employment{
  constructor(seniority, monthsDisabled, isPartTime){
    this._seniority = seniority;
    this._monthsDisabled = monthsDisabled;
    this._isPartTime = isPartTime;
  }
  get seniority() {return this._seniority};
  get monthsDisabled() {return this._monthsDisabled};
  get isPartTime() {return this._isPartTime};
}
describe('1002 Consolidate Conditional Expression', () => {

  it('after1', () => {
    const anEmployment = new Employment(1, 13, true);
    expect(disabilityAmount_after1(anEmployment)).equals(disabilityAmount_before(anEmployment));
  })
})