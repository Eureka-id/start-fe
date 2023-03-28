//let 블록 유효 범위를 갖는 지역 변수
let team = 'FE';

//const 상수,선언과 동시에 리터럴 값을 할당

const area = 'jeju';

/*
let和var的区别体现在作用域上。
var的作用域被规定为一个函数作用域，
而let则被规定为块作用域，
块作用域要比函数作用域小一些，
但是如果两者既没在函数中，也没在块作用域中定义，
那么两者都属于全局作用域。
在块作用域中使用let来代替var，这样不会污染块作用域的外部作用域，降低 bug率，使代码更安全

 */

//템플릿 표현식 语法 `巴拉巴拉 ${内容}`

//es5
var cp = '哈哈哈';
var url = 'https://1boon.kakao.com/' + cp;

//es6
const url = `https://1boon.kakao.com/${cp}`;

var str = 'Hello World';
const str1 = `We don't use the ${str}.`


//화살표 함수
// Pass a function to map
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//전개 구문  扩展运算符
function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
