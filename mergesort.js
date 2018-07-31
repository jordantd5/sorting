function split(wholeArray) {
  const center = wholeArray.length/2;
  const arrOne = wholeArray.slice(0, center);
  const arrTwo = wholeArray.slice(center);
  return [arrOne, arrTwo];
}

function merge(arrOne, arrTwo) {
  let newArr = [];
  let oneIdx = 0;
  let twoIdx = 0;
  while (oneIdx < arrOne.length && twoIdx < arrTwo.length) {
    if (arrOne[oneIdx] < arrTwo[twoIdx]) {
      newArr.push(arrOne[oneIdx++]);
    } else {
      newArr.push(arrTwo[twoIdx++]);
    }
  }
  for (; oneIdx < arrOne.length; oneIdx++) {
    newArr.push(arrOne[oneIdx]);
  }
  for (; twoIdx < arrTwo.length; twoIdx++) {
    newArr.push(arrTwo[twoIdx]);
  }
  return newArr;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let newArr = split(array);
  let firstArr = newArr[0];
  let secondArr = newArr[1];
return merge(mergeSort(firstArr), mergeSort(secondArr));
}
