function caller(customer, usage, provider) {
  monthCharge = charge(customer, usage, provider);
  return monthCharge;
}

function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
module.exports = caller;
