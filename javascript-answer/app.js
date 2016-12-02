'use strict'

var merge = {
  mergeIt: function(left, right){

    var result = [];
    console.log(left + " left side");
    console.log(right + " right side");
    while (left.length && right.length){
      if(left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while(left.length){
      result.push(left.shift());
    }

    while(right.length){
      result.push(right.shift());
    }

    return result;

  },
  sortIt: function(arr){
    if(arr.length < 2){
      return arr;
    }

    var findMiddle = arr.length/2;
    var leftSide = arr.slice(0, findMiddle);
    var rightSide = arr.slice(findMiddle, arr.length);

    return merge.mergeIt(merge.sortIt(leftSide), merge.sortIt(rightSide))
  }

}

module.exports = merge;
