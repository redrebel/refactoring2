const { describe } = require("mocha");
const { expect } = require("chai");
const LocalDate = require("@js-joda/core").LocalDate;

class Order {
  constructor(deliveryState, date) {
    this.deliveryState = deliveryState;
    this.placedOn = date;
  }
}

const testDate = LocalDate.parse("2020-10-31");
const order = new Order("MA", testDate);

describe("1103 Remove Flag Argument - before", () => {
  const deliveryDate = require("../before");
  it("Rush", () => {
    expect(deliveryDate(order, true)).to.deep.equals(testDate.plusDays(2));
  });

  it("No Rush", () => {
    expect(deliveryDate(order, false)).to.deep.equals(testDate.plusDays(4));
  });
});

describe("1103 Remove Flag Argument - after1", () => {
  const deliveryDate = require("../after1");
  it("Rush", () => {
    expect(deliveryDate(order, true)).to.deep.equals(testDate.plusDays(2));
  });

  it("No Rush", () => {
    expect(deliveryDate(order, false)).to.deep.equals(testDate.plusDays(4));
  });
});

describe("1103 Remove Flag Argument - after2", () => {
  const { rushDeliveryDate, regularDeliveryDate } = require("../after2");
  it("Rush", () => {
    expect(rushDeliveryDate(order, true)).to.deep.equals(testDate.plusDays(2));
  });

  it("No Rush", () => {
    expect(regularDeliveryDate(order, false)).to.deep.equals(
      testDate.plusDays(4)
    );
  });
});
