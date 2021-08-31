/*
  O javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro
  Protótipo é o termo utilizado para se referir ao que foi criado pela primeira vez, servindo de 
    modelo ou molde para futuras produções
  Todos os objs tem uma referência interna para um protótipo, (__proto__), que vem da propriedade
    prototype da função construtora que foi usada para criá-lo.
  Quando tentamos acessar um membro de um obj, primeiro, o motor do JS vai tentar encontrar este
    membro no próprio obj e depois a cadeia de protótipos é usada até o topo (null) até
    encontrar, ou não, tal membro;
*/


function Pessoa(nome, sobrenome) { // molde para novas pessoas
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`; // método dentro da func construtora
}


console.dir(Pessoa.prototype)

// instancias

const p1 = new Pessoa('Ivan', 'Rafael'); // <-- Pessoa:> funcao construtora
const p2 = new Pessoa('Elis', 'Regina');

const data = new Date(); // <-- Date:> funcao construtora

console.dir(p1);
console.dir(p2);
console.log(p1.nomeCompleto());
console.dir(data); 