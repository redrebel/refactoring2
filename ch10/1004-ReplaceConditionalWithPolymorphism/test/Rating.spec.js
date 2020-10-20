const { describe, it } = require("mocha");
const { expect } = require("chai");

const rating_before = require("../Rating/before");
const rating_after1 = require("../Rating/after1");
const rating_after2 = require("../Rating/after2");
const rating_after3 = require("../Rating/after3");

describe("1004 Replace Conditional with Polymorphism - Rating", () => {
  const voyage = { zone: "서인도", length: 10 };
  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  it("before", () => {
    const myRating = rating_before(voyage, history);
    console.log(myRating);
  });

  it("after1", () => {
    const myRating_before = rating_before(voyage, history);
    const myRating_after1 = rating_after1(voyage, history);
    expect(myRating_after1).equals(myRating_before);
  });

  it("after2", () => {
    const myRating_before = rating_before(voyage, history);
    const myRating_after3 = rating_after3(voyage, history);
    expect(myRating_after3).equals(myRating_before);
  });
});
