const { describe, it } = require("mocha");
const { expect } = require("chai");

const Person_before = require("../before");
const Person_after1 = require("../after1");

describe("0904 Change Reference to Value", () => {
  const areaCode = "82";
  const number = "1234-5678";
  let person_before;

  beforeEach(() => {
    person_before = new Person_before();
    person_before.areaCode = areaCode;
    person_before.number = number;
  });

  it("after1", () => {
    const person_after1 = new Person_after1();
    person_after1.areaCode = areaCode;
    person_after1.number = number;

    expect(person_after1.areaCode).equals(person_before.areaCode);
    expect(person_after1.number).equals(person_before.number);
  });
});
