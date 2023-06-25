var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    if (a.indexOf("0") == 0) {
        a = a.substring(1, a.length);
    }
    return a;
};
console.log(cutZero("0asd0"));
var removeDash = function (a) {
    if (a.indexOf("-") != -1) {
        a = a.replace(/-/gi, "");
        return Number(a);
    }
    else {
        return false;
    }
};
console.log(removeDash("123-456-789"));
var finish = function (a, b, c) {
    var val = b(a);
    console.log(c(val));
};
finish("010-1111-2222", cutZero, removeDash);
