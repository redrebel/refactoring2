const { describe } = require("mocha");
const { expect } = require("chai");

const salary_before = require("../before");
const salary_after1 = require("../after1");
const salary_after2 = require("../after2");
const salary_after3 = require("../after3");

describe("0807 Split Loop", () => {
  const people = [
    { age: 10, salary: 10 },
    { age: 12, salary: 20 },
    { age: 15, salary: 30 },
  ];
  it("after1", () => {
    expect(salary_before(people)).equals(salary_after1(people));
  });

  it("after2", () => {
    expect(salary_before(people)).equals(salary_after2(people));
  });

  it("after3", () => {
    expect(salary_before(people)).equals(salary_after3(people));
  });
});
