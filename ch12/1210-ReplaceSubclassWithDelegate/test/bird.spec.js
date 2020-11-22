const { describe } = require("mocha");
const { expect } = require("chai");

const europeanSwallow = {
  name: "유럽 제비",
  type: "유럽 제비",
  numberOfCoconuts: 1,
  voltage: 1,
  isNailed: true,
  plumage: "예쁘다",
};
const africanSwallow = {
  name: "아프리카 제비",
  type: "아프리카 제비",
  numberOfCoconuts: 1,
  voltage: 1,
  isNailed: true,
  plumage: "그을렸다",
};
const norwegianBlueParrot = {
  name: "노르웨이 파랑 앵무",
  type: "노르웨이 파랑 앵무",
  numberOfCoconuts: 1,
  voltage: 100,
  isNailed: false,
  plumage: "보통이다",
};

describe("1210 Replace Subclass with Delegate - Bird - Before", () => {
  const createBird = require("../Bird/before");
  it("EuropeanSwallow", () => {
    const bird = createBird(europeanSwallow);
    expect(bird.airSpeedVelocity).equals(35);
  });

  it("AfricanSwallow", () => {
    const bird = createBird(africanSwallow);
    expect(bird.airSpeedVelocity).equals(38);
  });

  it("NorwegianBlueParrot", () => {
    const bird = createBird(norwegianBlueParrot);
    expect(bird.airSpeedVelocity).equals(20);
    expect(bird.plumage).equals("보통이다");
  });
});

describe("1210 Replace Subclass with Delegate - Bird - after1", () => {
  const createBird = require("../Bird/after1");
  it("EuropeanSwallow", () => {
    const bird = createBird(europeanSwallow);
    expect(bird.airSpeedVelocity).equals(35);
  });

  it("AfricanSwallow", () => {
    const bird = createBird(africanSwallow);
    expect(bird.airSpeedVelocity).equals(38);
  });

  it("NorwegianBlueParrot", () => {
    const bird = createBird(norwegianBlueParrot);
    expect(bird.airSpeedVelocity).equals(20);
    expect(bird.plumage).equals("보통이다");
  });
});
