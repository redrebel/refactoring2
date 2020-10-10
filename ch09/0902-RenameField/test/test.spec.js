const { describe, it } = require("mocha");
const { expect } = require("chai");
const org_before = require("../before");
const org_after1 = require("../after1");
const org_after2 = require("../after2");
const org_after3 = require("../after3");

describe("0902 Rename Field", () => {
  it("after1", () => {
    //org_after1._country = "dd";
    expect(org_after1.country).equals(org_before.country);
    expect(org_after1.name).equals(org_before.name);
  });

  it("after2", () => {
    expect(org_after2.country).equals(org_before.country);
    expect(org_after2.name).equals(org_before.name);
  });

  it("after3", () => {
    expect(org_after3.country).equals(org_before.country);
    expect(org_after3.title).equals(org_before.name);
  });
});
