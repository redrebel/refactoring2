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

function getNumberOfMales() {
  const people = [];
  people.push(new Male("john"));
  people.push(new Female("jane"));
  people.push(new Male("kevin"));

  const numberOfMales = people.filter((p) => p instanceof Male).length;

  return numberOfMales;
}

module.exports = getNumberOfMales;
