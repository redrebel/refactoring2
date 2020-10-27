const { describe, it } = require("mocha");
const { expect } = require("chai");

const findMiscreant_before = require("../before");
const findMiscreant_after1 = require("../after1");
const findMiscreant_after2 = require("../after2");

const people1 = ["배트맨", "조커", "원더우먼"];
const people2 = ["배트맨", "원더우먼"];

describe("1007 Replace Control Flag with Break - before", () => {
  it("people1", () => {
    expect(findMiscreant_before(people1)).equals("There is a miscreant");
  });
  it("people2", () => {
    expect(findMiscreant_before(people2)).equals("No miscreant");
  });
});

describe("1007 Replace Control Flag with Break - after1", () => {
  it("people1", () => {
    expect(findMiscreant_after1(people1)).equals("There is a miscreant");
  });
  it("people2", () => {
    expect(findMiscreant_after1(people2)).equals("No miscreant");
  });
});

describe("1007 Replace Control Flag with Break - after2", () => {
  it("people1", () => {
    expect(findMiscreant_after2(people1)).equals("There is a miscreant");
  });
  it("people2", () => {
    expect(findMiscreant_after2(people2)).equals("No miscreant");
  });
});
