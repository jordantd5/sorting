function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let firstHalf = [];
  let secondHalf = [];
  if (wholeArray.length > 1){
    if (wholeArray.length % 2 === 0){
      firstHalf = wholeArray.slice(0, wholeArray.length/2);
      secondHalf = wholeArray.slice(wholeArray.length/2, wholeArray.length);
    } else {
      firstHalf = wholeArray.slice(0, ((wholeArray.length-1)/2));
      secondHalf = wholeArray.slice(((wholeArray.length-1)/2), wholeArray.length);
    }
    return [firstHalf, secondHalf];
  }
  return wholeArray;
}

function merge(arrOne, arrTwo) {
  let newArr = [];

  while (arrOne.length > 0 || arrTwo.length > 0) {
    if (arrOne[0] <= arrTwo[0]) {
      newArr.push(arrOne[0]);
      arrOne.shift();
    } else {
      newArr.push(arrTwo[0]);
      arrTwo.shift();
    }
  }
  return newArr;
}

function mergeSort(array) {
  let arr = split(array);
  let firstArr = arr.slice(0,1);
  let secondArr = arr.shift();

}
