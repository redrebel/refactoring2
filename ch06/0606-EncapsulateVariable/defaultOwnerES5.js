// ES6 code

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

module.exports.defaultOwner = function defaultOwner() {
  return defaultOwnerData;
};

module.exports.setDefaultOwner = function setDefaultOwner(arg) {
  defaultOwnerData = arg;
};
