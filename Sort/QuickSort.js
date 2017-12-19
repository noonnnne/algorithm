var randomArr = require('../randomArr').randomArr;

// 快速排序
function QuickSort(arr) {
  // 传入的参数不是数组类型
  if(!Array.isArray(arr)) return;
  // 传的为空数组或者数组只有一个元素
  if(arr.length <= 1) {
    return arr;
  }
  // 取数组的中间项作为基准值
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex, 1)
  var preArr = [],
       nextArr = [];
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
          preArr.push(arr[i]);
        } else {
          nextArr.push(arr[i]);
        }
      }
  return QuickSort(preArr).concat(pivot, QuickSort(nextArr));
}

console.log(QuickSort(randomArr()));