type TypeA = (a:number) => number;
type TypeB = () => void;
type User = {
    name : string,
    age : number,
    plusOne : TypeA,
    changeName : TypeB
}

let 회원정보 :User = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }
회원정보.plusOne(1);
회원정보.changeName();


type Type2 = (a:string) => string;
const cutZero:Type2 = function (a){
    if (a.indexOf("0") == 0) {
      a = a.substring(1 , a.length);
    }
    return a;
}
console.log(cutZero("0asd0"));


type Type3 = (a:string) => number | boolean;
const removeDash :Type3 = function (a){
  if (a.indexOf("-") != -1) {
    a = a.replace(/-/gi, "");
    return Number(a);
  } else {
    return false;
  }
}
console.log(removeDash("123-456-789"));


type typeF = (a:string, b:Type2, c:Type3) => void;
let finish :typeF = function (a, b, c){
  let val:string = b(a);
  console.log(c(val));
}

finish("010-1111-2222", cutZero, removeDash);