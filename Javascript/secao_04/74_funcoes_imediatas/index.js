// IIFE --> Immediately Invoked Function Expression
// funcoes imediatas ou auto invocadas

// function someFunction() {
//   // codigos aqui..........
//   console.log('Content');
// }
// someFunction(); // invocada loco apos criada

// invocando automaticamente....

// (() => { // codigo protegido
//   const nome = 'Ivan'; // nao sai para o escopo global
//   console.log(nome);
// })();

((nome, idade, altura) => {
  const sobrenome = 'Rafael';

  function criaInfo(nome) {
    return nome + ' ' + sobrenome + ' idade: ' + idade + ' altura: ' + altura;
  }

  function falaNome() {
    console.log(criaInfo(nome));
  }

  falaNome();
})('Ivan', 39, 1.87)

// ((a, b) => {
//   function sum(a, b) {
//     console.log(a + b);;
//   }
//   sum(a, b)
// })(10, 10)
