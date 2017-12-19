var randomArr = require('../randomArr').randomArr;

// 插入排序
function InsertSort(arr) {
  var len = arr.length;
  // 第一个元素视为有序数列，之后的元素视为无序数列
  for(var i = 1; i < len; i++) {
    if (arr[i] < arr[i - 1]) {
      // 取出无序数列的第i个元素插入到有序列表对应位置
      var ele = arr[i];
      // 
      var j  = i - 1;
      arr[i] = arr[j];

      while( j>= 0 && ele < arr[j]){
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = ele;
    }
  }

  return arr;
}

console.log(InsertSort(randomArr()))