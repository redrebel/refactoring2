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

function createPerson(aRecord) {
  let p;
  switch (aRecord.gender) {
    case "M":
      p = new Male(aRecord.name);
      break;
    case "F":
      p = new Female(aRecord.name);
      break;
    default:
      p = new Person(aRecord.name);
  }
  return p;
}

function loadFromInput(data) {
  const result = [];
  data.forEach((aRecord) => {
    result.push(createPerson(aRecord));
  });
  return result;
}

function getNumberOfMales() {
  const data = [
    { gender: "M", name: "john" },
    { gender: "F", name: "jane" },
    { gender: "M", name: "kevin" },
  ];
  const people = loadFromInput(data);

  const numberOfMales = people.filter((p) => p instanceof Male).length;

  return numberOfMales;
}

module.exports = getNumberOfMales;
