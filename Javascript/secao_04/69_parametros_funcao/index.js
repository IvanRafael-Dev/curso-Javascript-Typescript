// apenas para functions
function funcao() {
  console.log(arguments);
}

funcao('Valor1', 'Valor2');

function sumValues() {
  let total = 0;
  console.log(arguments);
  for (let argument of arguments) { // in é indice, of é valor
    total += argument
    console.log('total provisório: ', total);
  }
  console.log('soma dos valores: ', total);
}

sumValues(1, 2, 3, 4, 5);