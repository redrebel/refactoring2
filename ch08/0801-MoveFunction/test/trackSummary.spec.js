const { describe, it } = require("mocha");
const { expect } = require("chai");

const trackSummary_before = require("../trackSummary/before");
const trackSummary_after1 = require("../trackSummary/after1");
const trackSummary_after2 = require("../trackSummary/after2");
const trackSummary_after3 = require("../trackSummary/after3");

describe("0801-Move Function", () => {
  it("after1", () => {
    const points = [
      { lat: 1, lon: 1 },
      { lat: 2, lon: 2 },
      { lat: 3, lon: 3 },
    ];
    expect(trackSummary_after1(points)).to.deep.equals(
      trackSummary_before(points)
    );
  });

  it("after2", () => {
    const points = [
      { lat: 1, lon: 1 },
      { lat: 2, lon: 2 },
      { lat: 3, lon: 3 },
    ];
    expect(trackSummary_after2(points)).to.deep.equals(
      trackSummary_before(points)
    );
  });

  it("after3", () => {
    const points = [
      { lat: 1, lon: 1 },
      { lat: 2, lon: 2 },
      { lat: 3, lon: 3 },
    ];
    expect(trackSummary_after3(points)).to.deep.equals(
      trackSummary_before(points)
    );
  });
});
