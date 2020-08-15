const { Province, sampleProvinceData } = require("../Province");

// var assert = require("assert");
const { assert, expect } = require("chai");

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

  // change production
  it("change production", function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });
});
