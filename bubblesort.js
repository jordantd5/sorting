function bubbleSort(array) {
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        let result = bubbleSort.compare(array[j], array[j + 1]);
        if (result) {
          bubbleSort.swap(array, j, (j + 1))
        }
      }
    }
  } return array;
}

bubbleSort.swap = function (array, indOne, indTwo) {
  const indOneVal = array[indOne];
  array[indOne] = array[indTwo]
  array[indTwo] = indOneVal;
  return array;
}
g
bubbleSort.compare = function (numOne, numTwo) {
  if (numOne > numTwo) {return true}
  else {return false}
}
