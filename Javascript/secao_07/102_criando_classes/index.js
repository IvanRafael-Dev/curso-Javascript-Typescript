// quase identica a funcao construtora

class Pessoa {
  // metodo especial sempre que queremos passar parametros para uma classes
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //metodos são automaticamente linkados ao prototype
  falar(assunto) {
    console.log(`${this.nome} está falando sobre ${assunto}`);
  }

  comer(comida) {
    console.log(`${this.nome} está comendo ${comida}`);
  }

  bebendo(bebida) {
    console.log(`${this.nome} está bebendo ${bebida}`);
  }
}

const p1 = new Pessoa('Ivan', 'Rafael');

console.log(p1);
p1.falar('Javascript')