// 3. Map multiple 1-dimensional arrays into a multi-dimensional array following the index order and return min value from array

// ??Input [1, 2], [3, 4, 5], [6, 7, 8, 9]
// todo: Ouput [[1, 3, 6], [2, 4, 7]]

//   ?? Input [1, 2], [3, 4], [5, 6, 7], [8, 9]
//  todo  Ouput [[1, 3, 5, 8], [2, 4, 6, 9]]

function mapToTwoDimensionsArray(...listOfArray) {
  let minLength = Number.MAX_VALUE;
  for (let i = 0; i < listOfArray.length; i++) {
    if (listOfArray[i].length < minLength) {
      minLength = listOfArray[i].length;
    }
  }
  const myArray = [];
  for (let i = 0; i < minLength; i++) {
    let subArr = [];
    for (let j = 0; j < listOfArray.length; j++) {
      subArr.push(listOfArray[j][i]);
    }
    myArray.push(subArr);
  }

  return myArray;
}
console.log(mapToTwoDimensionsArray([1, 2], [3, 4, 5], [6, 7, 8, 9]));
console.log(mapToTwoDimensionsArray([1, 2], [3, 4], [5, 6, 7], [8, 9]));
