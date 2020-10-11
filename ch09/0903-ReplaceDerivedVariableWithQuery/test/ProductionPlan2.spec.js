const { describe, it } = require("mocha");
const { expect } = require("chai");
const PP2_before = require("../ProductionPlan2/before");
const PP2_after1 = require("../ProductionPlan2/after1");
const PP2_after2 = require("../ProductionPlan2/after2");
const PP2_after3 = require("../ProductionPlan2/after3");

describe("0903 Replace Derived Variable with Query 2", () => {
  let anAdjustment1;
  let anAdjustment2;
  let pp2_before;

  beforeEach(function () {
    anAdjustment1 = { amount: 100 };
    anAdjustment2 = { amount: 200 };
    pp2_before = new PP2_before(300);
    pp2_before.applyAdjustment(anAdjustment1);
    pp2_before.applyAdjustment(anAdjustment2);
  });

  it("after1", () => {
    const pp2_after1 = new PP2_after1(300);
    pp2_after1.applyAdjustment(anAdjustment1);
    pp2_after1.applyAdjustment(anAdjustment2);
    expect(pp2_after1.production).equals(pp2_before.production);
  });

  it("after2", () => {
    const pp2_after2 = new PP2_after2(300);
    pp2_after2.applyAdjustment(anAdjustment1);
    pp2_after2.applyAdjustment(anAdjustment2);
    expect(pp2_after2.production).equals(pp2_before.production);
  });

  it("after3", () => {
    const pp2_after3 = new PP2_after3(300);
    pp2_after3.applyAdjustment(anAdjustment1);
    pp2_after3.applyAdjustment(anAdjustment2);
    expect(pp2_after3.production).equals(pp2_before.production);
  });
});
