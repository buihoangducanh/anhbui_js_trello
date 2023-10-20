// Câu 1: Viết các js function giải quyết các yêu cầu sau:
// (Viết unit test cho từng function - chỉ cần run function và log ra kết quả với 3 cases khác nhau và comment kết quả expected trước mỗi lần gọi hàm)

// 1. Map two 1-dimensional arrays with same length into one 2-dimensional array following the index order (Map 2 mảng 1 chiều cùng độ dài thành 1 mảng 2 chiều cùng thứ tự index).
//    Input [1, 2, 3], [4, 5, 6]
//    Output [[1, 4], [2, 5], [3, 6]]

function mapToTwoDimensionsArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined;
  const myArr = [];
  for (let i = 0; i < arr1.length; i++) {
    myArr.push([arr1[i], arr2[i]]);
  }
  return myArr;
}

console.log(mapToTwoDimensionsArray([1, 2, 3], [4, 5, 6]));
console.log(mapToTwoDimensionsArray([32, 2, 3,5], [4, 5, 6,12]));
console.log(mapToTwoDimensionsArray([0, 2, 3,5], [4, 12, 62,12]));
