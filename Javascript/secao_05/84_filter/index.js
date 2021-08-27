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

