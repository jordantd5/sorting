describe('Bubble Sort', function(){
  let newArr;

  it('handles an empty array', function(){
    newArr = [];
    expect( bubbleSort(newArr) ).toEqual( [] );
  });
  it('handles a single array', function(){
    newArr = [1];
    expect( bubbleSort(newArr) ).toEqual([1]);
  });
  it('handles an full array', function(){
    newArr= [1, 5, 4, 2];
    expect( bubbleSort(newArr) ).toEqual([1, 2, 4, 5]);
  });
});

describe('Swap', function(){
  beforeAll(function () {
    newArr = [1, 5, 4, 2];
    spyOn(bubbleSort, 'swap').and.callThrough();
  });
  it('bubbleSort uses swap', function () {
    bubbleSort(newArr);
    expect(bubbleSort.swap.calls.count()).toEqual(3);
  });
});

describe('Compare', function(){
  beforeAll(function () {
    newArr = [1, 5, 4, 2];
    spyOn(bubbleSort, 'compare').and.callThrough();
  });
  it('bubbleSort uses compare', function () {
    bubbleSort(newArr);
    expect(bubbleSort.compare.calls.count()).toEqual(6);
  });
});
