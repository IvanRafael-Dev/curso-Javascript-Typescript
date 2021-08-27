const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2)
const array4 = array3.concat([7, 8, 9, 'Ivan'])

console.log(array4);

const outraOpcao = [...array1, 'qualquer valor no meio', ...array2, ...['spread', 'array', 'literal']]
console.log(outraOpcao);