const soma = function (x, y) { return x + y; };
console.log(soma(1, 2));                // 3

function soma1(x, y) { return x + y; };
console.log(soma1(1, 3));               // 4

const soma2 = (x, y) => { return x + y };
console.log(soma2(1, 4));               // 5

const num = x => { return x };          // Não necessita de parentes 1 valor
console.log(num(6));                    //1

const nothing = () => { return 7 };
console.log(nothing());                 // 7

function mult(num1) { return num2 => num1 * num2 };
let num1 = mult(2);
console.log(num1(4));                   // 8

// function round(base, expoente = 2) {
//     let result = 1;
//     for (let count = 0; count < expoente; count++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(round(4));                   // 16
// console.log(round(4, 4));                // 256

// function maior(...numbers) {    // aceita diversos valores
//     let resultado = -Infinity;
//     for (let number of numbers) {
//         if (number > resultado) resultado = number;
//     }
//     return resultado;
// }
// let numbers = [4, 1, 3, -2, 9];
// console.log(maior(4, 1, 3, -2, 10));    // 10
// console.log(maior(...numbers));         // 9
// console.log(maior(11, ...numbers, 2));  // 

// function repete(n, acao) {
//     for (let i = 0; i < n; i++) acao(i);
// }

// repete(2, console.log); // 0 1

// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current;
// }

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // 10

// function fala(palavra) {
//     console.log(`O ${this.pessoa} disse ${palavra}`);
// }

// let pedro = { pessoa: "Pedro", fala };
// pedro.fala("estou com fome!!"); // O Pedro disse estou com fome!!
// fala.call(pedro, "olá");        // O Pedro disse olá

// let object = new class { getWord(arg) { return arg; } };
// console.log(object.getWord("hello"));  // hello

// class Example {
//     constructor(type) {
//         this.type = type;
//     }
//     fala(palavra) {
//         console.log(`O ${this.type} disse ${palavra}`)
//     }
// }

// Example.prototype.algo = "coisa";
// Example.algo = "Alguma coisa";
// console.log(Example.algo);              // Alguma coisa
// console.log(Example.prototype.algo);    // coisa

// let sym = Symbol("example");
// Example.prototype[sym] = 10;

// let tamanho = {
//     get random() {
//         return Math.floor(Math.random() * 100);
//     }
// }

// console.log(tamanho.random);    // random número

// class Temperatura {
//     constructor(celsius) {
//         this.celsius = celsius;
//     }

//     get fahrenheit() {
//         return this.celsius * 1.8 + 32
//     }

//     set fahrenheit(value) {
//         this.celsius = (value - 32) / 1.8;
//     }

//     static fromFahrenheit(value) {
//         return new Temperatura((value - 32) / 1.8);
//     }
// }

// let temp = new Temperatura(22);
// console.log(temp.fahrenheit);   // 71.6
// temp.fahrenheit = 71.6;
// console.log(temp.celsius);      // 21.999999999999996

// class SymmetricMatrix extends Matrix { // bug Matrix não encotrado
//     constructor(size, element = (x, y) => undefined) {
//         super(size, size, (x, y) => {
//             if (x < y) return element(y, x);
//             else return element(x, y);
//         });
//     }

//     set(x, y, value) {
//         super.set(x, y, value);
//         if (x != y) {
//             super.set(y, x, value);
//         }
//     }
// }

// let matrix = new SymmetricMatrix(5, (x, y) => `${x} - ${y}`);
// console.log(matrix.get(2, 3));  // 3 - 2

// ############################################################################
// You Don't Know JS: Up & Going
// ############################################################################

function example1() {
    "use strict";  // Modo restrito, torna a função mais segura
    // w = 10; gera error
    let w = 10; //works!!!
    function example2() {   // verificar depois como chamar função dentro de outra função 123h
        ex1 = 10;
    }
    return example2;
}

example1()


var anonima_fun = function () { } // função anonima pq não tem nome
var nomeada_fun = function fun_named() { } // função normal, nomeada.

// (function IIFE() {
//     console.log("Hello!"); // Não funciona no node, porém funciona no navegador
// })();

function add_x_y(x) {
    function add(y) {
        return x + y;
    };
    return add;
}

var add_x = add_x_y(10);
console.log(add_x(10)); // 20

function User() {
    var username, password;

    function doLogin(user, pw) {
        username = user;
        password = pw;
    }
    var publicAPI = {
        login: doLogin
    };
    return publicAPI;
}

var wesley = User();
wesley.login("Wesley", "Legal123");
console.log(wesley) // { login: [Function: doLogin] }
console.log(wesley.login) // [Function: doLogin]

function algo_fun() {
    console.log(this.algo2);
}

var algo2 = "global";

var obj1 = {
    algo2: "obj1",
    algo_fun: algo_fun
};

var obj2 = {
    algo2: "obj2"
};

algo_fun();     // "global" -> works just console web
obj1.algo_fun(); // "obj1"
algo_fun.call(obj2) // "obj2"
new algo_fun();

// Prototypes

var proto = {
    a: 42
};

var type = Object.create(proto);
type.b = "é resposta para tudo"

console.log(type.a) // 42
console.log(type.b) // é resposta para tudo

// (function () { console.log("oi") })() //