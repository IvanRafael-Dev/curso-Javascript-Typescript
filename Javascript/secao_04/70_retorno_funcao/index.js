// return
// retorna um valor
// termina a execucao da funcao

function sum(a, b) {
  return a + b;
};

const total = sum(2, 2);
console.log(total);

function sumNoReturn(a, b) {
  console.log(a + b);
};

sumNoReturn(2, 2);

const totalNoReturn = sumNoReturn(2, 2);
console.log(totalNoReturn); // undefined

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

console.log(criaPessoa('Ivan', 'Rafael'))

const nomeCompleto = criaPessoa('Ivan', 'Rafael');
console.log('Nome: ', nomeCompleto.nome);
console.log('Sobrenome: ', nomeCompleto.sobrenome);

// de pirar a cabeca
function falaComeco(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
};

console.log(falaComeco('Oi, ')('tudo bem?'))

const falaResto = falaComeco('Hello');
console.log(falaResto('World'));

const helloWorld = falaComeco('Hello')('World');
console.log(helloWorld);

// outro exemplo

// function duplica(n) {
//   return n * 2;
// }

// function triplica(n) {
//   return n * 3;
// }

// function quadriplica(n) {
//   return n * 4;
// }

// function criaMultiplicador(multiplicador) {
//   // multiplicador
//   function multi(n) {
//     return n * multiplicador;
//   }
//   return multi;
// }

// eh igual a:

function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  }
};
// clousure - lembra do escopo na hora da criacao
const duplica = criaMultiplicador(2); // lembrando que criaMultiplicador retona uma funcao  
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));
