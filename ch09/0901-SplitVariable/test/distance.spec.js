const { describe, it } = require("mocha");
const { expect } = require("chai");
const distanceTravelled_before = require("../distance/before");
const distanceTravelled_after1 = require("../distance/after1");
const distanceTravelled_after2 = require("../distance/after2");

describe("0901 Split Variable", () => {
  const scenario = { primaryForce: 2, secondaryForce: 2, mass: 10, delay: 5 };
  it("after1", () => {
    const time = 10;
    const before_result = distanceTravelled_before(scenario, time);
    const after1_result = distanceTravelled_after1(scenario, time);
    expect(after1_result).equals(before_result);
  });

  it("after2", () => {
    const time = 10;
    const before_result = distanceTravelled_before(scenario, time);
    const after2_result = distanceTravelled_after2(scenario, time);
    expect(after2_result).equals(before_result);
  });
});
