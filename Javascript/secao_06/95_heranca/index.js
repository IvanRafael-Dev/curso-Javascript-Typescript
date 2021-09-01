// HERANÇA
/* 
  E-commerce:
    caneta, camiseta, lapis --> abstraio e reutilizo codigo --> produtos
    camiseta (cor) caneta(material)
    produto ---> aumento, desconto..
*/

function Produto(nome, preco, estoque = 0) {
   this.nome = nome;
   this.preco = preco;
   Object.defineProperty(this, 'changeEstoque', {
    enumerable: true,
    configurable: true,
    get: function() {
      return estoque;
    },
    set: function(value) {
      if (typeof value !== 'number') return console.log('Value must be a number');
      estoque = value;
    }
   })
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * percentual / 100);
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * percentual / 100);
};

// Produto.prototype.changeEstoque = function (quantidade) {
//   this.estoque = quantidade
// }

// Camiseta é uma especialização de Produto
// Herda tudo que Produto tem e pode ter suas proprias propriedades
function Camiseta(nome, preco, cor, estoque) {
  Produto.call(this, nome, preco, estoque);
  this.cor = cor; // Camiseta tem agora uma propriedade propria que na eh natural de Produto
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco, estoque)
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// posso sobreescrever metodos de Produto, para terem comportamentos proprios
Caneca.prototype.aumento = function (percentual, taxa = 0) {
  this.preco = this.preco + (this.preco * percentual / 100) + taxa;
}
Caneca.prototype.desconto = function (percentual, taxa = 0) {
  this.preco = this.preco - (this.preco * percentual / 100) + taxa;
}

const produto = new Produto('ProdutoGenerico', 10);
const camiseta = new Camiseta('Regata', 10, 'Vermelha', 1313);
const caneca = new Caneca('Café', 20, 'Vidro', 100);


camiseta.aumento(20);
caneca.aumento(0, 20);
caneca.desconto(10, 2);

camiseta.changeEstoque = 1000; // setter

console.log(produto);
console.log(camiseta);
console.log(caneca);
