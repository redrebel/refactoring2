const { describe } = require("mocha");
const { expect } = require("chai");
const {
  setRawDataOfCustomers,
  compareUsage,
  getCustomerData,
} = require("../after7");

describe("0701-EncapsulateRecord", function () {
  it("compareUsage_after7", function () {
    const customerJson = {
      1920: {
        name: "마틴 파울러",
        id: "1920",
        usages: {
          2016: {
            1: 50,
            2: 55,
          },
          2015: {
            1: 70,
            2: 63,
          },
        },
      },
      38673: {
        name: "닐 포드",
        id: "38673",
        usages: {
          2016: {
            1: 40,
            2: 39,
          },
        },
      },
    };

    setRawDataOfCustomers(customerJson);

    const customerID = "1920";
    const laterYear = "2016";
    const month = "2";

    const change =
      getCustomerData().rawData[customerID].usages[laterYear][month] -
      getCustomerData().rawData[customerID].usages[laterYear - 1][month];
    const afterJson = compareUsage(customerID, laterYear, month);

    expect(afterJson.change).equals(change);
  });
});
