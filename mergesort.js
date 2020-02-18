function split(wholeArray) {
  let firstHalf;
  let secondHalf;

  const splitLength = Math.floor(wholeArray.length / 2);

  if (wholeArray.length <= 1) {
    return wholeArray;
  }

  firstHalf = wholeArray.slice(0, splitLength);
  secondHalf = wholeArray.slice(splitLength);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  let resultArray = [];
  let indexArray1 = 0;
  let indexArray2 = 0;

  while (indexArray1 < array1.length && indexArray2 < array2.length) {
    if (array1[indexArray1] < array2[indexArray2]) {
      resultArray.push(array1[indexArray1]);
      indexArray1++;
    } else {
      resultArray.push(array2[indexArray2]);
      indexArray2++;
    }
  }

  if (indexArray2 < array2.length) {
    return resultArray.concat(array2.slice(indexArray2));
  } else {
    return resultArray.concat(array1.slice(indexArray1));
  }
}

function mergeSort(array) {
  /* your code here */
}
