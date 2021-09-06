class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.somenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.somenome}`
  }
}

const ivan = new Pessoa('Ivan', 'Rafael')
console.log(ivan.nomeCompleto);