let x = 10; // eslint-disable-line

x = 0b1010;
// x = 'Ivan'; not assignable to type

const y = 100;
// y = 'Elis Regina'; // nao posso trocar o type de uma const (tipo literal)

// a = 100;

const pessoa = {
  nome: 'Ivan' as const,
  idade: 39 as number,
};

// pessoa.nome = 'Ivn'; not assignable
// pessoa.idade = '10'; not assignable

function chooseColor(cor: 'Vermelha' | 'Branca' | 'Preta'): string {
  return cor;
}

console.log(chooseColor);

export default 1; // module mode
