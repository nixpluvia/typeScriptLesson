function printName(name) {
    if (name) {
        console.log("안녕하세요 " + name);
    }
    else {
        console.log("이름이 없습니다");
    }
}
function countRange(x) {
    if (typeof x == 'number') {
        x = x.toString();
    }
    return x.length;
}
function ableWedding(a, b, c) {
    var totalA = a;
    var totalB = b ? 500 : 0;
    var totalC = c === '상' ? 100 : 0;
    if (totalA + totalB + totalC >= 600) {
        return '결혼가능';
    }
}
