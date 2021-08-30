const numeros = [1, 3, 54, 32, 5, 65, 23, 7, 43, 7, 313, 543, 65, 232, 64];

// retornando os numeros maiores que 50

// nao modifica o original
// filter sempre --> retorna um array

// jeito antigo
// retorna true para valores que batem com o filter e false para o resto

function callbackFilter(elemento, _index, _array) {
  return elemento > 100;
}

// function callbackFilter(elemento, index, array) {
//   console.log(elemento, index);
//   return elemento > 100;
// }

const filtrados = numeros.filter(callbackFilter);
console.log(filtrados);


// utilizando arrow function

const maioresQue50 = numeros.filter((num) => num > 50);
console.log(maioresQue50);

const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

const numerosImpares = numeros.filter((num) => num % 2 !== 0)
console.log(numerosImpares);

const imparesUsandoArrayPares = numeros.filter((num) => !numerosPares.includes(num));
console.log(imparesUsandoArrayPares);

// retorne as pessoas que tem o nome com 5 letras ou mais 
const pessoas = [
  { nome: 'Ivan', idade: 39 },
  { nome: 'Amelia', idade: 86 },
  { nome: 'Fifi', idade: 1 },
  { nome: 'Ticinha', idade: 4 },
  { nome: 'Paty', idade: 33 },
  { nome: 'Teca', idade: 13 },
];

const nome5LetrasOuMais = pessoas.filter((pessoa) => pessoa.nome.length >= 5);
 console.log(nome5LetrasOuMais);

const pessoasCom50AnosOuMais = pessoas.filter((pessoa) => pessoa.idade >= 50);
console.log(pessoasCom50AnosOuMais);

const nomesQueTerminamEmA = pessoas.filter((pessoa) => pessoa.nome.endsWith('a'))
console.log(nomesQueTerminamEmA);
