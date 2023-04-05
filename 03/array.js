//sort 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
var words = ['c', 'b', 'a'];
console.log(words.sort());


//findIndex 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환
var words = ['a', 'b', 'c'];
var findIndex = words.findIndex(function(word) {
  return word === 'a';
});
console.log(findIndex);

//every 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
var numbers = [1, 2, 3];
var isCheck = numbers.every(function(number) {
  return number < 3;
});
console.log(isCheck);

//some  배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
var numbers = [1, 2, 3];
var isCheck = numbers.some(function(number) {
  return number < 3;
});
console.log(isCheck);
