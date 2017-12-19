var randomArr = require('../randomArr').randomArr;
/**
 * 对传入的数组进行冒泡排序
 * @param {*传入的参数数组} arr 
 */
function bubbleSort(arr) {
  // 当不是数组时
  if(!Array.isArray(arr)) return;
  // 当数组为空或者只有一个元素时
  if (arr.length <= 1) {
    return arr;
  }
  // 否则
  var len = arr.length;
  for ( var i = 0; i < len; i++) {
    for ( var j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}


console.log(bubbleSort(randomArr()));