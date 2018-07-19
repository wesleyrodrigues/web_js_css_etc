var a = 1;                          // Variável universal 
let b = 2;                          // Variável local 
const c = 3;                        // Constante

console.log(typeof 4);              // number
console.log(typeof 4.5);            // number

console.log(Number("10.1"));        // 10.1
console.log(Number("10"));          // 10

console.log(parseFloat("10.1"));    // 10.1
console.log(parseInt("10.1"));      // 10

console.log(Math.max(4, 2));        // 4
console.log(Math.min(4, 2, 3, 1));  // 1
console.log(Math.sqrt(100));        // 10

console.log(!isNaN(10));            // true
console.log(isFinite(Infinity));    // false

console.log(Number('123e-1'));      // 12.3
console.log(Number(''));            // 0   
console.log(Number('0x11'));        // 17
console.log(Number('0b11'));        // 3
console.log(Number('0o11'));        // 9
console.log(Number('foo'));         // NaN
console.log(Number('100a'));        // NaN

console.log(Math.floor(Math.random() * 10));  // número aleatório