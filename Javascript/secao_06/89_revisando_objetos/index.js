const pessoa = {
  nome: 'Ivan',
  sobrenome: 'Rafael'
};

const pessoaUm = new Object();
pessoaUm.nome = 'Chico';
pessoaUm.sobrenome = 'Buarque';
pessoaUm.idade = 39;

pessoaUm.nomeCompleto = function() { 
  return `${this.nome} ${this.sobrenome}`
}

pessoaUm.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoaUm);
const nomeCompleto = pessoaUm.nomeCompleto();
console.log(nomeCompleto);

const anoNascimento = pessoaUm.getDataNascimento();
console.log(anoNascimento);

for (let key in pessoaUm) console.log(pessoaUm[key]);

////////////////////////////////////////////////////////////////////////

// factory functions // contructor functions // classes

// factory
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  };
}
const p1 = criaPessoa('Paul', 'Stamits')
console.log(p1.nomeCompleto);

// constructor
function Cliente(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Object.freeze(this) --> nao permite alteracao nenhuma dentro do objeto 
  // return this ---> implícito 
}
// "new" vai criar um objeto vazio, atrela o this ao objeto;
const p2 = new Cliente('Terence', 'Mckenna');
Object.freeze(p2);
p2.nome = 'OutraCoisa';

console.log(p2);
