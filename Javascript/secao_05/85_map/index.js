// map - retorna um novo array
// pode alterar valores do array

const numeros = [2, 43, 32, 67, 54, 32, 2, 41, 15, 26, 7];;

// dobrando os numeros

const numerosDobrados = numeros.map((num) => `Numero original ${num} --> Numero dobrado ${num * 2}`);
console.log(numerosDobrados);

const pessoas = [
  { nome: 'Ivan', idade: 39 },
  { nome: 'Amelia', idade: 86 },
  { nome: 'Fifi', idade: 1 },
  { nome: 'Ticinha', idade: 4 },
  { nome: 'Paty', idade: 33 },
  { nome: 'Teca', idade: 13 },
];

const apenasNomes = pessoas.map((pessoa) => pessoa.nome);
console.log(apenasNomes);

const objDeIdades = pessoas.map(({ idade }) => ({ idade }));
console.log(objDeIdades);

const addIds = pessoas.map((pessoa, index) => ({ id: index + 1, ...pessoa }));
console.log(addIds);