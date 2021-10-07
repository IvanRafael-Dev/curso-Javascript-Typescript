// any mais seguro

let x: any;

x = 10;
x = 'Ivan';
x = '100';

const y = 100;
console.log(x + y); // nao me informa nada

let a: unknown;
a = 10;
a = 'Ivan';
a = '100';

console.log(a + y); //; me informa a checagem
if (typeof a === 'number') console.log(a + y); // entende o number e nao dá erro (no caso concatenaria a string)

// preferir sempre o unknown ao invés do any
