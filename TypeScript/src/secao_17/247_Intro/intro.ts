// // TS compila para JS
// // TS é um superset de JS

// /*
// // JS puro

// function multiplyNumber(x, y) {
//   return x * y;
// }

// const result = multiplyNumber(10, 'string')
//   console.log(result); // NaN, erro só aparece no runtime

// // migrando funcao para TS

// */

// // function multiplyNumber(x: number, y: number) {
// //   return x * y;
// // }

// const result = multiplyNumber(10, [1, 2]); // aqui o TS ja acusa o erro!! que maravilha senhor!!
// console.log(result); // NaN

// interface Nome { // contratos de tipos
//   nome: string;
// }

// interface SobreNome { // contratos de tipos
//   sobreNome: string;
// }

// class Aluno implements Nome, SobreNome {
//   constructor(
//     public readonly nome: string, // this.nome = nome
//     public readonly sobreNome: string,
//     private readonly idade: number,
//   ) {}
// };

// const aluno = new Aluno ('Ivan', 'Rafael', 39);
// console.log(aluno);
// // { nome: 'Ivan', sobreNome: 'Rafael', idade: 39 }

// //types
// type CalculatorFn = (x: number, y: number) => number;

// const add: CalculatorFn = (x, y) => x + y;
// const sub: CalculatorFn = (x, y) => x - y;
// const mul: CalculatorFn = (x, y) => x * y;
// const div: CalculatorFn = (x, y) => x / y;

// const doisMaisDois = add(2, 2); // 4

// // suporta uma coisa typo Enum

// type ProgrammingLanguages = 'JS' | 'TS' | 'Java' | 'Python';

// function sayUrFavoriteLanguage (language: ProgrammingLanguages) {
//   return `You like ${language}`
// }

// // inferencia de Tipos

// const pessoa = {
//   nome: 'Ivan',
//   sobreNome: 'Rafael',
//   idade: 39,
// }

// // const pessoa: {
// //   nome: string,
// //   sobreNome: string,
// //   idade: number,
// // }
