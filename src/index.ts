//Tipos string,number,bollean ...
let x:number = 10;

//Erro do typescript
//x = "teste";
x = 16;

console.log(x);

//inferencia e annotation
let y = 12;
//y = "teste";
y = 25;

//tipos basicos
let lastName:string = "JOAO PEDRO";
let age:number = 21;
const isAdmini:boolean = true;

console.log(typeof lastName);

lastName = "rodrigo";
console.log(lastName);

//Array
const myNumbers:number[] = [1,2,3,4];

myNumbers.push(10);

console.log(myNumbers);
console.log(myNumbers.length);
console.log(typeof myNumbers);
console.log(lastName.toUpperCase());

//Tuplas
let myTuple:[number,string,string[]];

myTuple = [5,"Teste",["1","2"]];

console.log(typeof myTuple);
console.log(myTuple);

//object literals -> {prop: value}
const user: {name:string, age:number} = {
    name: "Pedro",
    age: 18,
}

console.log(user);

console.log(user.name);

//Any -> má pratica

let a:any = 0;
a = "teste";
a = true;

console.log(typeof a);

//union type -> solução para o any
let id: string | number = "10";

id = 21;

//id = true;

//type alias
type myIdType = number | string;

const userId:myIdType = 10;

// enum
// tamanho de roupas (size: Medio, size:pequeno)

enum size{
    p = "pequeno",
    g = "grande",
    m = "medio",
}

const camisa = {
    name:"Gola v",
    size: size.m,
}

console.log(camisa);

//literal types

let teste: "algum valor"; // -> não pode ser alterado
let teste2: "autenticado" | null;

teste2 = null;

//funcoes

//Retorno implicito
function sum(a:number, b:number){
    return a + b;
}

console.log(sum(1,2));
//console.log(sum("2","2"));

//Retorno explicito
function sayHelloTo(name: string):string{
    return `Hello ${name}`;
}

console.log(sayHelloTo("João Pedro"));

//Não retorna nada
function logger(msg:string):void {
    console.log(msg);
}

function greeting(name:string, greet?:string):void{
    if(greet)
    {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("José");
greeting("João Pedro","sir");

// interfaces
interface MathFunctionParams{
    n1:number,
    n2:number,
}

function sumNumbers(nums:MathFunctionParams) : number{
    return nums.n1 + nums.n2;
}

sumNumbers({n1:2, n2:10});
console.log(sumNumbers({n1:21,n2:33}));

function multiplyNumbers(nums:MathFunctionParams):number{
    return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({n1:21,n2:3}));

//narrowing
//checagem de tipos

//narrowing usando typeof
function doSomething(num:number | boolean){
    if(typeof num === "number"){
        console.log(`O número é ${num}`);
        return;
    }
    console.log("Não foi passado um numero!");
}

doSomething(true);
doSomething(10);

//generics
function showArray<T>(arr:T[]):void{
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    })
}

const d: string[] = ["a","b","c"];

const j: number[] = [1,2,42,1];

showArray(d);
showArray(j);

//classes
class User{
    name
    role
    isApproved
    constructor(name:string, role:string, isApproved:boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() : void{
        console.log(`O nome é ${this.name}`);
    }

    showUserRole(canShow:boolean) : void{
        if(canShow){
            console.log(`A idade do usuario é ${this.role}`)
            return;
        }
        console.log("Informação restrita!");
    }
}

const zeca = new User("Zeca","Admin",true);

zeca.showUserName();
zeca.showUserRole(true);
zeca.showUserRole(false);


console.log(zeca);

interface IVehicle{
    brand:string;
    showBrand():void;
}

class car implements IVehicle{
    brand
    wheels
    constructor(brand:string, wheels:number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const bemosa = new car("BMW",4);

console.log(bemosa);
bemosa.showBrand();

class SuperCar extends car{
    engine
    constructor(brand:string, wheels:number, engine:number){
        super(brand,wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi",4,2.0);
console.log(a4);

a4.showBrand();

//decorators
//Adicionar propriedades em tempo de execução por exemplo
// id, data de criação ...
function BaseParameters(){
    return function <T extends {new (...args:any[]) : {}}>(constructor:T){
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Client{
    name
    constructor(name:string){
        this.name = name;
    }
}

const joao = new Client("João Pedro");
console.log(joao);


 