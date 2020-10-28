const { describe } = require("mocha");
const { expect } = require("chai");

const people1 = ["배트맨", "조커", "원더우먼"];
const people2 = ["배트맨", "원더우먼"];

describe("1101 Separate Query from Modifier - before", () => {
  const alertForMiscreant = require("../before");

  it("people1", () => {
    expect(alertForMiscreant(people1)).equals("조커");
  });

  it("people2", () => {
    expect(alertForMiscreant(people2)).equals("");
  });
});

describe("1101 Separate Query from Modifier - after1", () => {
  const findMiscreant = require("../after1");

  it("people1", () => {
    expect(findMiscreant(people1)).equals("조커");
  });

  it("people2", () => {
    expect(findMiscreant(people2)).equals("");
  });
});

describe("1101 Separate Query from Modifier - after2", () => {
  const alertForMiscreant = require("../after2");

  it("people1", () => {
    expect(alertForMiscreant(people1)).equals("There is a miscreant");
  });

  it("people2", () => {
    expect(alertForMiscreant(people2)).equals("No Miscreant");
  });
});
