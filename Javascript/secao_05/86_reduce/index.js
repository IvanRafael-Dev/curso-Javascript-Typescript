// reduzir array para um unico elemento
// somar valores de array, ou array de objetos
const numeros = [1, 2, 3, 4, 5];

const pessoas = [
  { nome: 'Ivan', idade: 39 },
  { nome: 'Amelia', idade: 86 },
  { nome: 'Fifi', idade: 1 },
  { nome: 'Ticinha', idade: 4 },
  { nome: 'Paty', idade: 33 },
  { nome: 'Teca', idade: 13 },
];

// const total = numeros.reduce((acc, value) => {
//   acc += value;
//   return acc
// }, 0); // initial value 

// console.log(total);

// um filter, só para entendimento
const arrayDePares = numeros.reduce((acc, value) => {
  if (value % 2 === 0) acc.push(value);
  return acc
}, []); // initial value 
console.log(arrayDePares);

// um map, só para entendimento
const arrayDobro = numeros.reduce((acc, value) => {
  acc.push(value * 2);
  return acc;
}, []);
console.log(arrayDobro);

const totalParesEImpares = numeros.reduce((acc, value) => {
  if (value % 2 === 0) acc.pares += 1;
  if (value % 2 !== 0) acc.impares += 1;
  return acc
}, { pares: 0, impares: 0 });

console.log(totalParesEImpares);

// const valorTotalArrayNumeros = numeros.reduce((accumulator, currentValue) => accumulator += currentValue);
// console.log(valorTotalArrayNumeros);

const pessoaMaisVelha = pessoas.reduce((acc, curr) => {
  if (curr.idade > acc.idade) return curr;
  return acc;
})
console.log(pessoaMaisVelha);

const pessoaMaisNova = pessoas.reduce((acc, curr) => curr.idade < acc.idade ? curr : acc);
console.log(pessoaMaisNova);