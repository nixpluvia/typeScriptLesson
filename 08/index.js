var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var carMini = new Car('미니 쿠퍼', 3000);
console.log(carMini);
console.log(carMini.tax());
var Word = /** @class */ (function () {
    function Word() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        rest.forEach(function (v) {
            if (typeof v === 'string') {
                _this.str.push(v);
            }
            else {
                _this.num.push(v);
            }
        });
    }
    return Word;
}());
var Divider = new Word('Lee', 31, 20, 'Yu');
console.log(Divider.num);
console.log(Divider.str);
