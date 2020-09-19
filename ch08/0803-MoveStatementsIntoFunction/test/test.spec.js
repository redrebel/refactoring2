const { describe } = require("mocha");
const { expect } = require("chai");

const {
  renderPerson: renderPerson_before,
  photoDiv: photoDiv_before,
} = require("../before");
const {
  renderPerson: renderPerson_after1,
  photoDiv: photoDiv_after1,
} = require("../after1");
const {
  renderPerson: renderPerson_after2,
  photoDiv: photoDiv_after2,
} = require("../after2");

describe("0803 MoveStatementsIntoFunction", () => {
  it("after1", () => {
    const photo = { title: "title", location: "seoul", date: new Date() };
    const person = { name: "lee", photo: photo };
    expect(renderPerson_before("", person)).equals(
      renderPerson_after1("", person)
    );
    expect(photoDiv_before(photo)).equals(photoDiv_after1(photo));
  });
  it("after2", () => {
    const photo = { title: "title", location: "seoul", date: new Date() };
    const person = { name: "lee", photo: photo };
    expect(renderPerson_before("", person)).equals(
      renderPerson_after2("", person)
    );
    expect(photoDiv_before(photo)).equals(photoDiv_after2(photo));
  });
});
