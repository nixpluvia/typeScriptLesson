function printName (name?:string) :void {
    if (name) {
        console.log("안녕하세요 " + name);
    } else {
        console.log("이름이 없습니다")
    }
}


function countRange(x:string|number) :number {
    if (typeof x == 'number') {
        x = x.toString();
    }
    return x.length;
}


function ableWedding(a:number, b:boolean, c:string) :string|void {
    let totalA :number = a;
    let totalB :number = b ? 500 : 0;
    let totalC :number = c === '상' ? 100 : 0;
    if (totalA + totalB + totalC >= 600) {
        return '결혼가능';
    }
}