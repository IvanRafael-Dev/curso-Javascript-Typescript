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

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f); // se eu nao enviaar valor, o padrao eh undefined
}

funcao2(1, 2, 3);

// default params
function sum(a, b = 1, c = 1) {
  const total = a + b + c;
  console.log(total);
}

sum(2);
sum(2, 2);
sum(2, '', 2)

// destructuring parameters
function nomeCompleto({ nome, sobrenome }) {
  console.log(nome, sobrenome);
}

nomeCompleto({ nome: 'Ivan', sobrenome: 'Rafael'});

const obj = {
  nome: 'Paul',
  sobrenome: 'Stamits',
}

nomeCompleto(obj);

function logArrayValues([value1, value2, value3]) {
  console.log(value1, value2, value3);
};

const array = ['Valores', 'do', 'array'];

logArrayValues(array);

// rest operator, ultimo parametro da funcao
function conta(operador, acumulador, ...numeros) {
  for (let num of numeros) {
    if (operador === '+') {
      acumulador += num;
    } else if (operador === '-') {
      acumulador -= num;      
    } else if (operador === '*') {
      acumulador *= num;
    } else if (operador === '/') {
      acumulador /= num;
    }
  }
  console.log(acumulador);
}

conta('/', 1, 10, 20, 30, 40, 50);

const showArgs = (...args) => {
  console.log(args);
};

showArgs('a', 'b', 'c')