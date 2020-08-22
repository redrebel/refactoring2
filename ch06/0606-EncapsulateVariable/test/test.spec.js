const defaultOwner = require("../defaultOwnerES5");
const { assert } = require("chai");

const owner1 = defaultOwner.defaultOwner();
assert.equal("파울러", owner1.lastName, "처음 값 확인");

const owner2 = defaultOwner.defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "owner2를 변경한 후");
