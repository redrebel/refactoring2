const { describe } = require("mocha");
const { expect } = require("chai");

const { Shipment: Shipment_before, TrackingInformation } = require("../before");
const Shipment_after = require("../after1");

describe("0706-Inline Class", function () {
  it("test", function () {
    const before = new Shipment_before();
    const after = new Shipment_after();
    const request = { vender: "현대" };
    before.trackingInformation = new TrackingInformation({
      shippingCompany: "",
    });
    before.trackingInformation.shippingCompany = request.vender;
    after.shippingCompany = request.vender;
    expect(after.shippingCompany).equals(
      before.trackingInformation.shippingCompany
    );
  });
});
