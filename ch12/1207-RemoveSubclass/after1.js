class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return _name;
  }
  get genderCode() {
    return "X";
  }
  // 생략
}

class Male extends Person {
  get genderCode() {
    return "M";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

function createPerson(name) {
  return new Person(name);
}

function createMale(name) {
  return new Male(name);
}

function createFemale(name) {
  return new Female(name);
}

function getNumberOfMales() {
  const people = [];
  people.push(createMale("john"));
  people.push(createFemale("jane"));
  people.push(createMale("kevin"));

  const numberOfMales = people.filter((p) => p instanceof Male).length;

  return numberOfMales;
}

module.exports = getNumberOfMales;
