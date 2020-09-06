const { describe } = require("mocha");
const { expect } = require("chai");
const organization_before1 = require("../before");
const organization_after1 = require("../after1");
const customerData_before2 = require("../before2").customerData;
const compareUsage_before2 = require("../before2").compareUsage;
const compareUsage_after2 = require("../after2").compareUsage;
const compareUsage_after3 = require("../after3").compareUsage;
const setUsage_after4 = require("../after4").setUsage;
const getRawDataOfCustomers_after4 = require("../after4").getRawDataOfCustomers;
const getCustomerData_after5 = require("../after5").getCustomerData;
const getRawDataOfCustomers_after5 = require("../after5").getRawDataOfCustomers;
const getCustomerData_after6 = require("../after6").getCustomerData;
const compareUsage_after6 = require("../after6").compareUsage;

describe("0701-EncapsulateRecord", function () {
  it("after1", function () {
    expect(`<h1>${organization_before1.name}</h1>`).equal(
      `<h1>${organization_after1.name}</h1>`
    );

    let newName = "이정근";
    organization_before1.name = newName;
    organization_after1.name = newName;
    expect(organization_before1.name).equal(organization_after1.name);
  });

  it("before2-customerData", function () {
    const customerID = "1920";
    const year = "2016";
    const month = "2";
    tmp = customerData_before2[customerID].usages[year][month];
    customerData_before2[customerID].usages[year][month] = "10";
    expect(customerData_before2[customerID].usages[year][month]).equals("10");
    customerData_before2[customerID].usages[year][month] = tmp;
  });
});

describe("0701-EncapsulateRecord-compareUsage", function () {
  it("compareUsage_before2", function () {
    const customerID = "1920";
    const lastYear = "2016";
    const month = "2";

    const expectJson = compareUsage_before2(customerID, lastYear, month);

    expect(expectJson.laterAmount).equals(
      customerData_before2[customerID].usages[lastYear][month]
    );
    expect(expectJson.change).equals(
      customerData_before2[customerID].usages[lastYear][month] -
        customerData_before2[customerID].usages[lastYear - 1][month]
    );
  });

  it("compareUsage_after2", function () {
    const customerID = "1920";
    const lastYear = "2016";
    const month = "2";

    const beforeJson = compareUsage_before2(customerID, lastYear, month);
    const afterJson = compareUsage_after2(customerID, lastYear, month);
    // console.log("beforeJson:", beforeJson);
    // console.log("afterJson", afterJson);
    expect(afterJson.laterAmount).equals(beforeJson.laterAmount);
    expect(afterJson.change).equals(beforeJson.change);
    expect(afterJson).deep.equals(beforeJson);
  });

  it("compareUsage_after3", function () {
    const customerID = "1920";
    const lastYear = "2016";
    const month = "2";

    const beforeJson = compareUsage_before2(customerID, lastYear, month);
    const afterJson = compareUsage_after3(customerID, lastYear, month);

    expect(afterJson.laterAmount).equals(beforeJson.laterAmount);
    expect(afterJson.change).equals(beforeJson.change);
    expect(afterJson).deep.equals(beforeJson);
  });

  it("setUsage_after4", function () {
    const customerID = "1920";
    const lastYear = "2016";
    const month = "2";

    const tmp = getRawDataOfCustomers_after4()[customerID].usages[lastYear][
      month
    ];
    setUsage_after4(customerID, lastYear, month, 10);
    expect(
      getRawDataOfCustomers_after4()[customerID].usages[lastYear][month]
    ).equals(10);
  });

  it("setUsage_after5", function () {
    const customerID = "1920";
    const lastYear = "2016";
    const month = "2";

    const customerData = getCustomerData_after5();
    customerData.setUsage(customerID, lastYear, month, 10);
    expect(
      getRawDataOfCustomers_after5()[customerID].usages[lastYear][month]
    ).equals(10);
  });

  it("compareUsage_after6", function () {
    const customerID = "1920";
    const lastYear = "2016";
    const month = "2";
    const customerData = getCustomerData_after6();
    const change =
      customerData.usage(customerID, lastYear, month) -
      customerData.usage(customerID, lastYear - 1, month);
    const afterJson = compareUsage_after6(customerID, lastYear, month);

    expect(afterJson.change).equals(change);
  });
});
