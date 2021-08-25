// funcoes fabricas
// funcoes que retornan objetos

// ex

function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    peso,
    altura,

    fala: function(assunto) {
      return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}`
    },

    imc: function() {
      return (this.peso / (this.altura ** 2)).toFixed(2);
    },
    // getter
    get nome_completo() { // metodo se comporta como um atributo !!
      return `Nome completo: ${this.nome} ${this.sobrenome}`;
    },
    //setter
    set nome_completo(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
  };
}

const pessoa1 = criaPessoa('Ivan', 'Rafael', 102, 1.87);
const pessoa2 = criaPessoa('Patricia', 'Cabral', 88, 1.76);

// console.log(pessoa1);
console.log(pessoa1.fala('javascript'));
console.log(pessoa2.fala('comunicação não violenta'));

pessoa1.nome_completo = 'Chico Buarque de Hollanda'; // nao funciona se o metodo for apenas de getter
console.log(`Nome: ${pessoa1.nome}`);
console.log(`Sobrenome: ${pessoa1.sobrenome}`);
console.log(pessoa1.nome_completo);
console.log(pessoa2.nome_completo);


console.log(pessoa1.imc());
console.log(pessoa2.imc());