var arr = [1, 2, 3];


var arr = new Array(1, 2, 3); 
var arr = new Array(3); 
console.log(arr.length); //3

//输出数据组内容
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//数组的一些方法
//pop  배열 뒷부분의 값 삭제
//var words = ['a', 'b', 'c'];
//console.log(words.pop());

//push  배열 뒷부분에 값을 삽입
/*
var words = ['a', 'b', 'c'];
words.push('d');
console.log(words);
 */

//join
/*
var words = ['a', 'b', 'c'];
console.log(words.join('&')
 */
//concat 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
/*
var words = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
console.log(words.concat(numbers));
 */

//unshift 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환

/*
var words = ['a', 'b', 'c'];
console.log(words.unshift('z'));
console.log(words);
 */

//shift  배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
/*
var words = ['a', 'b', 'c'];
console.log(words.shift());
console.log(words);

 */

//splice  기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
/*
var words = ['a', 'b', 'c'];
console.log(words.splice(0, 1));
console.log(words);
 */
// slice 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
/*
var words = ['a', 'b', 'c'];
console.log(words.slice(2));
console.log(words.slice(0, 1));
console.log(words);
 */

//forEach

var words = ['a', 'b', 'c'];
words.forEach(function(word) {
  console.log(word);
});

//map  모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환/
var words = ['a', 'b', 'c'];
var newWords = words.map(function(word) {
  return word + ' ok';
});
console.log(newWords);

//reverse 배열의 순서를 반전
var words = ['a', 'b', 'c'];
console.log(words.reverse());