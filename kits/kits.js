/**
 *
 * 1.随机整数
 * 2.随机rgb颜色
 * 3.随机十六进制颜色
 *
 */
var kits = {};

// 写一个函数，返回从min到max之间的 随机整数，包括min不包括max
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

// 写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff
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
kits.randomDeg = function() {
  return Math.floor(Math.random() * 259) + 'deg';
};

// 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z
kits.getRandStr = function(len) {
  var result = '';
  var dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // console.log(Math.random() * dict.length)

  for (let index = 0; index < len; index++) {
    start = Math.floor(Math.random() * dict.length);
    // console.log(start)
    const element = dict[start];
    // console.log(element);
    result += element;
  }
  return result;
};
// getRandStr(10);
// console.log(getRandStr(100));

// 写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255
kits.randomIP = function() {
  // var result = '';
  var result = [];
  for (let i = 0; i < 4; i++) {
    var part = Math.floor(Math.random() * 255);
    // result += part+ '.';
    result.push(part);
  }
  return result.join('.');
};
// console.log(randomIP());

