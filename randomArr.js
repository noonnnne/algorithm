/**
 * 
 * @param {*传入数组} arr 
 */
function notInArrNum(arr){
  var num = Math.floor(Math.random()*100);
  /**
   * 将不在数组中随机数返回
   */
  if(arr.indexOf(num) != -1){
    num = notInArrNum(arr);
  }
  if(arr.indexOf(num) == -1) {
    return num;
  }
}
/**
 * 生成一个长度100的不重复的随机数
 */
function randomArr() {
  var count = 0;
  var arr = [];
  while(count < 100) {
    var a = notInArrNum(arr);
    arr.push(a);
    count++;
  }
  return arr;
}

module.exports = {
  randomArr
}