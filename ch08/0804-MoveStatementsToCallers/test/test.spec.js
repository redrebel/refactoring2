const { describe } = require("mocha");
const { expect } = require("chai");

const OutStream = require("../OutStream");
const {
  renderPerson: renderPerson_before,
  listRecentPhotos: listRecentPhotos_before,
} = require("../before");
const {
  renderPerson: renderPerson_after1,
  listRecentPhotos: listRecentPhotos_after1,
} = require("../after1");

describe("0804 Move Statements to Callers", () => {
  const outStream = new OutStream();
  const photo1 = { title: "title1", date: new Date(), location: "seoul" };
  const photo2 = { title: "title2", date: new Date(), location: "bucheon" };
  const photos = [photo1, photo2];
  const person = { photo: photo1, name: "lee" };
  it("after1", () => {
    renderPerson_before(outStream, person);
    renderPerson_after1(outStream, person);
    listRecentPhotos_before(outStream, photos);
    listRecentPhotos_after1(outStream, photos);
  });
  it("after2", () => {
    renderPerson_before(outStream, person);
    renderPerson_after1(outStream, person);
    listRecentPhotos_before(outStream, photos);
    listRecentPhotos_after1(outStream, photos);
  });
});
