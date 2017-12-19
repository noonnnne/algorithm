var randomArr = require('../randomArr').randomArr;

// 选择排序
function SelectSort(arr) {
  if(!Array.isArray(arr)) return;
  var length = arr.length;
  for (var i = 0; i < length; i++) { //缩小选择的范围
    var min = arr[i]; //假定范围内第一个为最小值
    var index = i; //记录最小值的下标
    for (var j = i + 1; j < length; j++) { //在范围内选取最小值
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    if (index != i) { //把范围内最小值交换到范围内第一个
      var temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}

console.log(SelectSort(randomArr()))