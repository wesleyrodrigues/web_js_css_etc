console.log(true && false);         // false
console.log(true || false);         // true
console.log(false ? 1 : 2);         // 2
console.log(true ? 1 : 2);          // 1
console.log(null == undefined);     // true
console.log(1 || 2);                // 1
console.log(1 && 2);                // 2
console.log(1 == 1 && 1.0 === 1.0); // true

console.log(Boolean(1));            // true

// ##########################################################
//      Condição                #############################

if (1 === 1) { "Verdade" };    // Verdade
if (2 === 2) "Verdade 2";      // Verdade 2
if (3 === "3") "Verdade 3";    // Sempre usar 3 = para comparação precisa ===

if (false) {
    console.log("if");
} else if (true) {
    console.log("Else");       // Else
}

switch (1) {
    case 2:
        console.log(2);
        break;
    case 1:
        console.log("É " + 1);  // É 1
        break;
    default:
        console.log("nenhum");
        break;
}

// ##########################################################
//      Loops                   #############################
let b = 2
while (b <= 4) {
    console.log(b); // 2 3 4
    b += 1;
}

do { true } while (false);

for (let n = 0; n <= 2; n += 1) {
    console.log(n);      // 0 1 2
}

// Recursion
function round0(base, expoente = 2) {
    if (expoente == 0) { return 1 }
    else { return base * round0(base, expoente - 1) };
}
round0(2, 4);   // 16 
round0(5);      // 25

// ##########################################################

/* comentários 
de mais de 
uma linha */


let iterator = "Ok"[Symbol.iterator]();
console.log(iterator.next());   // { value: 'O', done: false }
console.log(iterator.next());   // { value: 'k', done: false }
console.log(iterator.next());   // { value: undefined, done: true }