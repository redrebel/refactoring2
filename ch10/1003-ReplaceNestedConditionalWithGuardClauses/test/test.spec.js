const { describe, it } = require("mocha");
const { expect } = require("chai");

const payAmount_before = require("../PayAmount/before")
const payAmount_after1 = require("../PayAmount/after1")
const payAmount_after2 = require("../PayAmount/after2")

describe('1003 Replace Nested Conditional with Guard Clauses - PayAmount', () => {
  it('after1', () => {
    const employee = {isSeperated:true, isRetired:true}
    expect(payAmount_after1(employee)).deep.equals(payAmount_before(employee));
  })
  it('after2', () => {
    const employee = {isSeperated:false, isRetired:true}
    expect(payAmount_after2(employee)).deep.equals(payAmount_before(employee));
  })
})


const adjustedCapital_before = require("../AdjustedCapital/before")
const adjustedCapital_after1 = require("../AdjustedCapital/after1")
const adjustedCapital_after2 = require("../AdjustedCapital/after2")

describe('1003 Replace Nested Conditional with Guard Clauses - AdjustedCapital', () => {
  it('after1', () => {
    const anInstrument1 = {capital: 1 , interestRate: 1, duration: 1, income:10, adjustmentFactor: 2}
    expect(adjustedCapital_after1(anInstrument1)).deep.equals(adjustedCapital_before(anInstrument1));
    const anInstrument2 = {capital: 0 , interestRate: 1, duration: 1, income:10, adjustmentFactor: 2}
    expect(adjustedCapital_after1(anInstrument2)).deep.equals(adjustedCapital_before(anInstrument2));
  })
  it('after2', () => {
    const anInstrument1 = {capital: 1 , interestRate: 1, duration: 1, income:10, adjustmentFactor: 2}
    expect(adjustedCapital_after2(anInstrument1)).deep.equals(adjustedCapital_before(anInstrument1));
    const anInstrument2 = {capital: 0 , interestRate: 1, duration: 1, income:10, adjustmentFactor: 2}
    expect(adjustedCapital_after2(anInstrument1)).deep.equals(adjustedCapital_before(anInstrument1));
  })
})