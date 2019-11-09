/**
 *
 * 1.随机整数
 * 2.随机rgb颜色
 * 3.随机十六进制颜色
 *
 */
var kits = {};

//随机整数
kits.randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min));
};

//随机rgb
kits.randomRGB = function() {
  var result = [];
  for (let i = 0; i < 3; i++) {
    var random = Math.floor(Math.random() * 256);
    result.push(random);
  }
  // console.log(result.join(','))
  return result.join(',');
};

//随机16进制颜色
kits.randomColor = function() {
  var result = '#';
  let dict = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * dict.length);
    const element = dict[random];
    result += element;
  }
  return result;
};

// 随机角度
kits.randomDeg = function (){
    return Math.floor(Math.random()*259) +'deg';
}