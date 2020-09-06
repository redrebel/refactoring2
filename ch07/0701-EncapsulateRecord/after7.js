const _ = require("lodash");

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }
}

function getCustomerData() {
  return customerData;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}
function getRawDataOfCustomers() {
  return customerData.rawData;
}

function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][
    month
  ];
  return { laterAmount: later, change: later - earlier };
}

module.exports = { getCustomerData, setRawDataOfCustomers, compareUsage };
