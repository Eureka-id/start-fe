//주요 연산자
//+
console.log(1 + 2); // 3
console.log('a' + 'b'); // "ab"
console.log(1 + '4'); // "14"
console.log(+1 + '4');
console.log(1 * '4');

//동등, 일치
'' == '0'; // false
0 == ''; // true
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == undefined; // false
false == null; // false
null == undefined; // true
' \t\r\n' == 0; // true

//in  좌변값이 우변객체 프로퍼티 이름에 해당할 경우

var image = { width: 1, height: 2 };

console.log('width' in image); //true
console.log('size' in image);
console.log('toString' in image);

//delete 객체의 프로퍼티 삭제 var 로 선언한 변수 delete못함
//typeof 类型识别
console.log(typeof (1 + '4'));
//인스턴스인지 여부
var arr = [1, 2, 3];
console.log(arr instanceof Array); //true