"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 16;
console.log(x);
let y = 12;
y = 25;
let lastName = "JOAO PEDRO";
let age = 21;
const isAdmini = true;
console.log(typeof lastName);
lastName = "rodrigo";
console.log(lastName);
const myNumbers = [1, 2, 3, 4];
myNumbers.push(10);
console.log(myNumbers);
console.log(myNumbers.length);
console.log(typeof myNumbers);
console.log(lastName.toUpperCase());
let myTuple;
myTuple = [5, "Teste", ["1", "2"]];
console.log(typeof myTuple);
console.log(myTuple);
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
console.log(typeof a);
let id = "10";
id = 21;
const userId = 10;
var size;
(function (size) {
    size["p"] = "pequeno";
    size["g"] = "grande";
    size["m"] = "medio";
})(size || (size = {}));
const camisa = {
    name: "Gola v",
    size: size.m,
};
console.log(camisa);
let teste;
let teste2;
teste2 = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("João Pedro"));
function logger(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José");
greeting("João Pedro", "sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
sumNumbers({ n1: 2, n2: 10 });
console.log(sumNumbers({ n1: 21, n2: 33 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 21, n2: 3 }));
function doSomething(num) {
    if (typeof num === "number") {
        console.log(`O número é ${num}`);
        return;
    }
    console.log("Não foi passado um numero!");
}
doSomething(true);
doSomething(10);
function showArray(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const d = ["a", "b", "c"];
const j = [1, 2, 42, 1];
showArray(d);
showArray(j);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A idade do usuario é ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zeca", "Admin", true);
zeca.showUserName();
zeca.showUserRole(true);
zeca.showUserRole(false);
console.log(zeca);
class car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const bemosa = new car("BMW", 4);
console.log(bemosa);
bemosa.showBrand();
class SuperCar extends car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Client = class Client {
    constructor(name) {
        this.name = name;
    }
};
Client = __decorate([
    BaseParameters()
], Client);
const joao = new Client("João Pedro");
console.log(joao);
