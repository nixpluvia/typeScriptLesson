//narrowing (협소화)
//애매한 타입을 만났을 경우에 if문을 통해서 타입을 구분해줘야한다
//assertion (덮어쓰기)
//narrowing을 할 때 만 사용가능
// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림 
function changeNumberArr(x) {
    var change = [];
    change.forEach(function (val) {
        if (typeof val === 'string') {
            change.push(parseInt(val));
        }
        else {
            change.push(val);
        }
    });
    return change;
}
changeNumberArr(['1', 2, '3']);
var teacherA = { subject: 'math' };
var teacherB = { subject: ['science', 'english'] };
var teacherC = { subject: ['science', 'art', 'korean'] };
function finalSubject(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else {
        return x.subject[x.subject.length - 1];
    }
}
