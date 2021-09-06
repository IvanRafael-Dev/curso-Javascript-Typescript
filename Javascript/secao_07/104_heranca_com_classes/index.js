class DispositoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    console.log(`${this.nome} está ligando`)
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    console.log(`${this.nome} está desligando`);
    this.ligado = false;
  }
}

const tv = new DispositoEletronico('Televisão');
console.log(tv);
tv.ligar();
tv.desligar();
tv.desligar();
tv.ligar();
console.log(tv);
tv.ligar();


class Smartphone extends DispositoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // superclass tudo que estiver no construtor mae, vai ser refeito
    this.cor = cor;
    this.modelo = modelo;
  }
}

const galaxy = new Smartphone('Galaxy', 'Vermelho', 'S20');
galaxy.ligar();
console.log(galaxy);

class Tablet extends DispositoEletronico {
  constructor(nome, cor, wifi) {
    super(nome)
    this.nome = nome;
    this.cor = cor;
    this.wifi = wifi;
  }
}

const tablet = new Tablet('iPad', 'preto', true)

console.log(tablet);