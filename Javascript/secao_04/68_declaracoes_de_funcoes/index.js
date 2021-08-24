// declaracao de funcao // hoisting
sayHello();

function sayHello() {
  console.log('Hello!!');
}


//first-class objects // no-hoisting
// function expression
const randomNumber = function () {
  console.log(Math.round(Math.random() * 10));
};

const executeFunction = (randomNumber) => {
  console.log('Executando randomNumber()');
  randomNumber();
};

executeFunction(randomNumber);

//arrow function
const arrowFunction = () => {
  console.log('I\'m an arrow function');
}

arrowFunction();

setTimeout(() => {
  console.log('Bye');
}, 1000)

// inside an object

const pessoa = {
  falar:() => console.log('Falando'),
  tossir () { console.log('cofcof') },
}

pessoa.falar();
pessoa.tossir();