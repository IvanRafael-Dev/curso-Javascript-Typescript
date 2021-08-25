const nome = 'Ivan';

function falaNome() {
  console.log(nome); // escopo léxico, funcao enxerga variaveis vizinhas
}

function usaFalaNome() {
  const nome = 'Rafael'; // funcao lembra onde foi declarada e nome permanece o mesmo
  falaNome(); // escopo lexico
};

usaFalaNome();
