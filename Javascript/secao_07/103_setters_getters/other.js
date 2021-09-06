class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor) {
    const valorArray = valor.split(' ');
    this.nome = valorArray.shift();
    this.sobrenome = valorArray.join(' ');
  }
}

const ivan = new Pessoa('Ivan', 'Rafael')
console.log(ivan.nomeCompleto);

ivan.nomeCompleto = 'Ivan Rafael Bonaparte'
console.log(ivan);
