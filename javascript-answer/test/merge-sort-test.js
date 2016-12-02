'use strict'

const expect = require('chai').expect;
const merge = require('../app');


describe('MERGE SORT', function () {
 it('Should sort it yo', function () {

  var testArr = [1,4,7,9,3,5,8,12];

  var result = merge.sortIt(testArr);
  var expected = [1,3,4,5,7,8,9,12];

  expect(result).to.deep.equal(expected);

 })
 it('Should sort it with dupes', function () {

  var testArr = [1,4,7,9,4,3,5,8,12];

  var result = merge.sortIt(testArr);
  var expected = [1,3,4,4,5,7,8,9,12];

  expect(result).to.deep.equal(expected);

 })

})
