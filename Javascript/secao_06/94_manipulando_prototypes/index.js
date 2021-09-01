// new Object automatico Object.prototype
const objA = {
  // __proto__: Object.prototype,
  keyA: 'A'
};

const objB = {
  // __proto__: Object.prototype,
  keyB: 'B'
};

const objC = new Object();
objC.keyC = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * percentual / 100)  
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * percentual / 100)  
}

const p1 = new Produto('Camiseta', 50);


// literal

const p2 = {
  nome: 'Chocolate',
  preco: 5,
};

Object.setPrototypeOf(p2, Produto.prototype)

p1.aumento(100);
p2.aumento(100);
p1.desconto(10);
console.log(p1);
console.log(p2);

// criar um objeto ja settando o prototype
// const p3 = Object.create(Object.prototype) // objeto normal

const p3 = Object.create(Produto.prototype, {
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'G'
  },
  preco: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

p3.aumento(10);
console.log(p3);