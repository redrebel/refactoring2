const { describe } = require("mocha");
const { expect } = require("chai");

const salary_before = require("../before");

describe("0807 Split Loop", () => {
  it("after", () => {
    const people = [
      { age: 10, salary: 10 },
      { age: 12, salary: 20 },
      { age: 15, salary: 30 },
    ];
    console.log(salary_before(people));
  });
});
