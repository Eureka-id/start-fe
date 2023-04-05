//동적 타이핑
if("test"){  //true 로 자동 변환
    console.log("true");
  }


  /*
   원시타입:변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터의 값(value) 보관
   基本数据类型那一些

   참조타입：변수에는 데이터에 대한 참조(reference)만 저장
    Object
    Array
    Function
   */

    //乘法表
    var num=0;
    for(var i=1 ;i<10;i++){
        for(var j=1;j<10;j++){
            num=i*j;
            //如果乘积是一位数，则前面添加两个空格保持队列
            if(num/10<1){
                num="&nbsp;&nbsp;"+i*j;
            }
            if(j<=i) {
                document.write(j + "*" + i + "=" + num + "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }

    //함수  javascript 함수는 다른 함수 내에 중첩되어 정의도 가능
    function sum(x) {
        var y = 1;
        return x + y; //return 문이 없을경우 undefined반환
      }
      
      var sum = function() {
        var y = 1;
        return x + y;
      };

    
