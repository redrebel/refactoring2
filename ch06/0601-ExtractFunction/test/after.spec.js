const printOwing_before = require("../before");
const printOwing_after = require("../after");

const invoice = {
  orders: [{ amount: 100 }, { amount: 200 }, { amount: 300 }],
  customer: "이정근",
};
//console.log(invoice);
printOwing_before(invoice);
printOwing_after(invoice);
