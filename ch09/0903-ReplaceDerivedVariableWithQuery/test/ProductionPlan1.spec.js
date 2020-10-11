const { describe, it } = require("mocha");
const { expect } = require("chai");
const PP1_before = require("../ProductionPlan1/before");
const PP1_after1 = require("../ProductionPlan1/after1");
const PP1_after2 = require("../ProductionPlan1/after2");
const PP1_after3 = require("../ProductionPlan1/after3");

describe("0903 Replace Derived Variable with Query", () => {
  const anAdjustment1 = { amount: 100 };
  const anAdjustment2 = { amount: 200 };

  it("after1", () => {
    const pp1_before = new PP1_before();
    pp1_before.applyAdjustment(anAdjustment1);
    pp1_before.applyAdjustment(anAdjustment2);
    const pp1_after1 = new PP1_after1();
    pp1_after1.applyAdjustment(anAdjustment1);
    pp1_after1.applyAdjustment(anAdjustment2);
    expect(pp1_after1.production).equals(pp1_before.production);
  });

  it("after2", () => {
    const pp1_before = new PP1_before();
    pp1_before.applyAdjustment(anAdjustment1);
    pp1_before.applyAdjustment(anAdjustment2);
    const pp1_after2 = new PP1_after2();
    pp1_after2.applyAdjustment(anAdjustment1);
    pp1_after2.applyAdjustment(anAdjustment2);
    expect(pp1_after2.production).equals(pp1_before.production);
  });

  it("after3", () => {
    const pp1_before = new PP1_before();
    pp1_before.applyAdjustment(anAdjustment1);
    pp1_before.applyAdjustment(anAdjustment2);
    const pp1_after3 = new PP1_after2();
    pp1_after3.applyAdjustment(anAdjustment1);
    pp1_after3.applyAdjustment(anAdjustment2);
    expect(pp1_after3.production).equals(pp1_before.production);
  });
});
