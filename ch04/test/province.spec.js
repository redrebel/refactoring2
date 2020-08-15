const { Province, sampleProvinceData } = require("../Province");

// var assert = require("assert");
const { assert } = require("chai");

describe("province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  // 생산 부족분을 제대로 계산하는지
  it("shortfall", function () {
    assert.equal(asia.shortfall, 5);
  });

  // 초기 픽스처로부터 총수익이 제대로 계산되는지
  it("profit", function () {
    assert.equal(asia.profit, 230);
  });
});
