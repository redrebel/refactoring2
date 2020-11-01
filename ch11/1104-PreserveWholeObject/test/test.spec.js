const { describe } = require("mocha");
const { expect } = require("chai");

const room1 = { daysTempRange: { low: 10, high: 20 } };
const room2 = { daysTempRange: { low: 9, high: 21 } };

describe("1104 Preserve Whole Object - before", () => {
  const caller = require("../before");
  it("in", () => {
    expect(caller(room1)).equals("정상입니다.");
  });

  it("out", () => {
    expect(caller(room2)).equals("방 온도가 지정 범위를 벗어났습니다.");
  });
});

describe("1104 Preserve Whole Object - after1", () => {
  const caller = require("../after1");
  it("in", () => {
    expect(caller(room1)).equals("정상입니다.");
  });

  it("out", () => {
    expect(caller(room2)).equals("방 온도가 지정 범위를 벗어났습니다.");
  });
});

describe("1104 Preserve Whole Object - after2", () => {
  const caller = require("../after2");
  it("in", () => {
    expect(caller(room1)).equals("정상입니다.");
  });

  it("out", () => {
    expect(caller(room2)).equals("방 온도가 지정 범위를 벗어났습니다.");
  });
});
