// 2. Map two 1-dimensional arrays with different length into one 2-dimensional array following the index order and return min value from array

function mapAndReturnMinVal(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let minVal = arr1[0] < arr2[0] ? arr1[0] : arr2[0];
  const myArr = [];
  for (let i = 0; i < arr1.length; i++) {
    myArr.push([arr1[i], arr2[i]]);
  }

  return {
    array: myArr,
    minVal: minVal,
  };
}
console.log(mapAndReturnMinVal([1, 2], [4, 5, 6]));
console.log(mapAndReturnMinVal([2, 2, 5], [4, 5, 6, 12]));
console.log(mapAndReturnMinVal([0, 2, 5], [4, 12, 62, 12]));
