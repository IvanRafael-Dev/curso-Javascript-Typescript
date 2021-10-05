/* eslint-disable */
// tipos basicos (inferencia de tipos) // apenas para exemplo, isso eh uma redundancia
let nome: string = 'Ivan';
// let idade: number = '39'; // typescript gera um erro
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n; // big int

// Arrays

let arrayNums: Array<number> = [1, 2, 3];
let arrayNums2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];
let arrayStrings2: string[] = ['a', 'b', 'c'];

// objects

let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 39,
  nome: 'Ivan',
}; // adulto como opcional

// Functions

function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

console.log(sum2(2, 2))
