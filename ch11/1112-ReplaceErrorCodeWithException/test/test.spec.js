const { describe } = require("mocha");
const { expect } = require("chai");

const orderData = { country: 0 };
const errorOrderData = { country: 1 };

describe("1112 Replace Error Code with Exception - before", () => {
  const main = require("../before");
  it("no Error", () => {
    const { status, errorList } = main(orderData);
    expect(status).gte(0);
    expect(errorList.length).equals(0);
  });

  it("Error", () => {
    const { status, errorList } = main(errorOrderData);
    expect(status).equals(-23);
    expect(errorList.length).gt(0);

    expect(errorList[0].order).deep.equals(errorOrderData);
    expect(errorList[0].errorCode).equals(-23);
  });
});

describe("1112 Replace Error Code with Exception - after2", () => {
  const main = require("../after2");
  it("no Error", () => {
    const errorList = main(orderData);
    expect(errorList.length).equals(0);
  });

  it("Error", () => {
    const errorList = main(errorOrderData);
    expect(errorList.length).gt(0);

    expect(errorList[0].order).deep.equals(errorOrderData);
    expect(errorList[0].errorCode).equals(-23);
  });
});
