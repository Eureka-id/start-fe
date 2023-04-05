//变数 변수
/*
명명 규칙  变数命名规则和JAVA一样
var 사용 권장
첫번째 문자로 숫자 불가능
변수명 대소문자 구분
어떤 값도 넣기 가능, 자동 타입을 변환
예약어는 사용불가
 */

//var name  = 'FE';
//var age = 28;
//var message = 'hello ' + name;

//데이터 타입  数据类型
//Number

var number = 5;
//NaN 숫자가 아닌 특수한 

//String
var nick = 'wo xian zai hen fan'
var str ="We don't use the hello world";
//Boolean
var isMan = true; // true | false

console.log(nick == '');

console.log(!!'test'); 

//Function

var log = function(str) {
    console.log(str);
  };
  function log(str) {
    console.log(str);
  }

  //Object

  var image = {}; 

image.width = 1;
image.height = 2;

image['width'] = 1; 
image['name' + i] = '1.jpg'; 

image = { width: 1, height: 2 };

//Array
image = []; 

image[0] = '1.jpg';
image[1] = '2.jpg';

image = ['1.jpg', 2, { name: '3.jpg' }];

//null
var userName = null;
//undefined 
var number1; 
