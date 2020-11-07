const { describe } = require("mocha");
const { expect } = require("chai");

class ScoringGuide {
  stateWithLowCertification(originState) {
    return originState;
  }
}

describe("1109 Replace Function with Command", () => {
  const candidate = { originState: true };
  const medicalExam = { isSmoker: true };
  const scoringGuide = new ScoringGuide();
  it("before", () => {
    const score = require("../before");
    expect(score(candidate, medicalExam, scoringGuide)).equals(-10);
  });

  it("after1", () => {
    const score = require("../after1");
    expect(score(candidate, medicalExam, scoringGuide)).equals(-10);
  });

  it("after2", () => {
    const score = require("../after2");
    expect(score(candidate, medicalExam, scoringGuide)).equals(-10);
  });
});
