const { describe, it } = require("mocha");
const { expect } = require("chai");

const {plumages:plumages_before, speeds:speeds_before} = require("../Bird/before")
const {plumages:plumages_after1, speeds:speeds_after1} = require("../Bird/after1")
const {plumages:plumages_after2, speeds:speeds_after2} = require("../Bird/after2")

describe('1004 Replace Conditional with Polymorphism', () => {
  const birds = [
    {name:'유럽 제비', type: '유럽 제비', numberOfCoconuts: 1, voltage: 1, isNailed: true},
    {name:'아프리카 제비', type: '아프리카 제비', numberOfCoconuts: 1, voltage: 1, isNailed: true},
    {name:'노르웨이 파랑 앵무', type: '노르웨이 파랑 앵무', numberOfCoconuts: 1, voltage: 101, isNailed: false},
  ];

  it('before', () => {
    console.log(plumages_before(birds));
    console.log(speeds_before(birds))
  })

  
  it('after1', () => {
    expect(plumages_after1(birds)).deep.equals(plumages_before(birds))
    expect(speeds_after1(birds)).deep.equals(speeds_before(birds))
  })

  it('after2', () => {
    expect(plumages_after2(birds)).deep.equals(plumages_before(birds))
    expect(speeds_after2(birds)).deep.equals(speeds_before(birds))
  })
})