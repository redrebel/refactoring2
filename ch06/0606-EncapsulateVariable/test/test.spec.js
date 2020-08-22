const defaultOwner = require("../defaultOwnerES5");
const { assert } = require("chai");

const owner1 = defaultOwner.defaultOwner();
assert.equal("파울러", owner1.lastName, "처음 값 확인");
