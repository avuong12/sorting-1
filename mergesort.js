function split(wholeArray) {
  let firstHalf;
  let secondHalf;

  const splitLength = Math.floor(wholeArray.length / 2)

  if (wholeArray.length <= 1) {
    return wholeArray;
  }

  firstHalf = wholeArray.slice(0, splitLength)
  secondHalf = wholeArray.slice(splitLength)

  return [firstHalf, secondHalf];
}

function merge(array) {

}

function mergeSort(array) {

  /* your code here */

}