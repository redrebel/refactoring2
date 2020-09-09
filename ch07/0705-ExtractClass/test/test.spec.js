const { describe } = require("mocha");
const { expect } = require("chai");

const Person_before = require("../before");
const { Person: Person_after2, TelephoneNumber } = require("../after2");

describe("0705-ExtractClass", function () {
  it("test", function () {
    const name = "kevin";
    const officeAreaCode = 82;
    const officeNumber = "1234-5678";

    const person_before = new Person_before();
    person_before.name = name;
    person_before.officeAreaCode = officeAreaCode;
    person_before.officeNumber = officeNumber;

    const person_after2 = new Person_after2();
    person_after2.name = name;
    person_after2.officeAreaCode = officeAreaCode;
    person_after2.officeNumber = officeNumber;

    expect(person_after2.name).equals(person_before.name);
    expect(person_after2.TelephoneNumber).equals(person_before.TelephoneNumber);
  });
});
