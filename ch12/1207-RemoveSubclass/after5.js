class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode;
  }

  get name() {
    return _name;
  }
  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    return "M" === this._genderCode;
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
      return new Person(aRecord.name, "M");
    case "F":
      return new Person(aRecord.name, "F");
    default:
      return new Person(aRecord.name, "X");
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
