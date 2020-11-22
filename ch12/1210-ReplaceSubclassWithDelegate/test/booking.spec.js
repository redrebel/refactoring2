const { describe } = require("mocha");
const { expect } = require("chai");

const show = {
  price: 100,
  hasOwnProperty: function () {
    return true;
  },
};

const date = new Date();
const extra = { premiumFee: 20 };

describe("1210 Replace Subclass with Delegate - Booking - before", () => {
  const { Booking, PremiumBooking } = require("../Booking/before");
  const booking = new Booking(show, date);
  const premiumBooking = new PremiumBooking(show, date, extra);
  it("Booking", () => {
    expect(booking.hasTalkback).equals(false);
    expect(booking.basePrice).equals(115);
  });

  it("PremiumBooking", () => {
    expect(premiumBooking.hasTalkback).equals(true);
    expect(premiumBooking.basePrice).equals(135);
    expect(premiumBooking.hasDinner).equals(false);
  });
});

describe("1210 Replace Subclass with Delegate - Booking - after1", () => {
  const { createBooking, createPremiumBooking } = require("../Booking/after1");
  const booking = createBooking(show, date);
  const premiumBooking = createPremiumBooking(show, date, extra);
  it("Booking", () => {
    expect(booking.hasTalkback).equals(false);
    expect(booking.basePrice).equals(115);
  });

  it("PremiumBooking", () => {
    expect(premiumBooking.hasTalkback).equals(true);
    expect(premiumBooking.basePrice).equals(135);
    expect(premiumBooking.hasDinner).equals(false);
  });
});

describe("1210 Replace Subclass with Delegate - Booking - after2", () => {
  const { createBooking, createPremiumBooking } = require("../Booking/after2");
  const booking = createBooking(show, date);
  const premiumBooking = createPremiumBooking(show, date, extra);
  it("Booking", () => {
    expect(booking.hasTalkback).equals(false);
    expect(booking.basePrice).equals(115);
  });

  it("PremiumBooking", () => {
    expect(premiumBooking.hasTalkback).equals(true);
    expect(premiumBooking.basePrice).equals(135);
    expect(premiumBooking.hasDinner).equals(false);
  });
});
