// intersection between types

type TemNome = { nome: string };
type TemSobreNome = { sobrenome: string };
type TemIdade = { idade: number };

// type Pessoa = TemNome | TemSobreNome | TemIdade;

// muuuuti relaxado nao eh a inteção
// const pessoa: Pessoa = {
//   idade: 39,
//   nome: 'Ivan',
//   sobrenome: 'Rafael',
// };

type Pessoa = TemNome & TemSobreNome & TemIdade;

const pessoa: Pessoa = {
  idade: 39,
  nome: 'Ivan',
  sobrenome: 'Rafael',
};

console.log(pessoa);

// type AB = 'A' | 'B';
// type AC = 'A' | 'C';
// type AD = 'A' | 'D';

// type Intersection = AB & AC & AD; // 'A'

export { pessoa };
