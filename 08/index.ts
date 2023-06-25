class Car {
    model :string;
    price :number;
    constructor (a :string, b :number){
        this.model = a;
        this.price = b;
    }

    tax() :number{
        return this.price / 10;
    }
}
let carMini = new Car('미니 쿠퍼', 3000);
console.log(carMini);
console.log(carMini.tax());


class Word {
    num :number[];
    str :string[];
    constructor(...rest :(string|number)[]){
        let _this = this;
        this.num = [];
        this.str = [];
        rest.forEach((v:string|number) => {
            if (typeof v === 'string'){
                _this.str.push(v);
            } else {
                _this.num.push(v);
            }
        });
    }
}
let Divider = new Word('Lee', 31, 20, 'Yu');
console.log(Divider.num);
console.log(Divider.str);