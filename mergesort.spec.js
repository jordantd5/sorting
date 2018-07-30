describe('Split Array function', function() {
  let newArr;

  it('is able to split an array into two halves', function() {
    // your code here
    newArr = [1, 3, 5, 7];
    expect(split(newArr)).toEqual([[1,3], [5,7]]);
  });

  it('is able to split an array into two halves with odd number', function() {
    // your code here
    newArr = [1, 3, 5, 7, 9];
    expect(split(newArr)).toEqual([[1,3], [5,7,9]]);
  });
});

describe('Merge function', function(){
  let arrOne;
  let arrTwo;

  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    arrOne = [1, 5];
    arrTwo = [3, 7];
    expect(merge(arrOne, arrTwo)).toEqual([1,3,5,7]);
  });

  it('is able to merge two sorted arrays into one sorted array with odd number', function(){
    // test the merging algorithm
    arrOne = [1, 5];
    arrTwo = [3, 7, 9];
    expect(merge(arrOne, arrTwo)).toEqual([1,3,5,7,9]);
  });
});
