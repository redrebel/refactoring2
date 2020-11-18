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

  get isMale() {
    return this instanceof Male;
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

function createPerson(aRecord) {
  let p;
  switch (aRecord.gender) {
    case "M":
      return new Male(aRecord.name);
    case "F":
      return new Female(aRecord.name);
    default:
      return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map((aRecord) => createPerson(aRecord));
}

function getNumberOfMales() {
  const data = [
    { gender: "M", name: "john" },
    { gender: "F", name: "jane" },
    { gender: "M", name: "kevin" },
  ];
  const people = loadFromInput(data);

  const numberOfMales = people.filter((p) => p.isMale).length;

  return numberOfMales;
}

module.exports = getNumberOfMales;
