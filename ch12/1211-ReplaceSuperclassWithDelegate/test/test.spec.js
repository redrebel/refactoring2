const { describe } = require("mocha");
const { expect } = require("chai");
const Date = require("@js-joda/core").LocalDate;

describe("1211 Replace Superclass with Delegate", () => {
  const tags = ["history", "europe", "revered"];
  const dateLastCleaned = Date.parse("2020-11-23");

  it("before", () => {
    const Scroll = require("../before");
    const scroll = new Scroll("book", "bool", tags, dateLastCleaned);
    const targetDate = Date.parse("2022-11-23");
    expect(scroll.needsCleaning(targetDate)).equals(true);
  });

  it("after1", () => {
    const Scroll = require("../after1");
    const scroll = new Scroll("book", "bool", tags, dateLastCleaned);
    const targetDate = Date.parse("2022-11-23");
    expect(scroll.needsCleaning(targetDate)).equals(true);
  });

  it("after2", () => {
    const { CatalogItem, Scroll } = require("../after2");
    const catalog = new Map([[1, new CatalogItem("book", "book", tags)]]);
    const aDocument = [
      { id: "book", lastCleaned: "2020-11-23", catalogData: { id: 1 } },
    ];
    const scrolls = aDocument.map(
      (record) =>
        new Scroll(
          record.id,
          Date.parse(record.lastCleaned),
          record.catalogData.id,
          catalog
        )
    );
    //const scroll = new Scroll("book", "bool", tags, dateLastCleaned);
    const targetDate = Date.parse("2022-11-23");
    expect(scrolls[0].needsCleaning(targetDate)).equals(true);
  });
});
