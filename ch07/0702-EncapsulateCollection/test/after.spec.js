const { describe } = require("mocha");
const { expect } = require("chai");
const { Person: Person_before, Course: Course_before } = require("../before");
const { Person: Person_after, Course: Course_after } = require("../after1");

describe("0702", function () {
  it("courses-before", function () {
    const person_before = new Person_before("before");
    expect(person_before.name).equals("before");

    const before_courses = [];
    before_courses.push(new Course_before("a", false));
    before_courses.push(new Course_before("b", false));
    person_before.courses = before_courses;
    before_courses.push(new Course_before("c", false));
    expect(person_before.courses).to.deep.equal(before_courses);
    //console.log(person_before.courses);
  });

  it("courses-after", function () {
    const person_after = new Person_after("after");
    expect(person_after.name).equals("after");

    const after_courses = [];
    after_courses.push(new Course_after("a", false));
    after_courses.push(new Course_after("b", false));
    person_after.courses = after_courses;
    after_courses.push(new Course_after("c", false));
    expect(person_after.courses).not.equal(after_courses);
    //console.log(after_courses);
  });
});
