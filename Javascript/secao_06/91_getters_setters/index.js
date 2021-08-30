// getters e setters
// maneira de proteger propriedades
// value e writable serao substituidos por get e set

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,

    get: function() { // pega o valor e exibe
      return estoque;
    },
    
    set: function(value) {
      if (typeof value !== 'number') {
        // throw new Error('Value must be a number');
        console.log('Value must be a number');
        return;
      }
      estoque = value;
    }
  })
}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1);
// set 
produto1.estoque = '1313';
console.log(produto1.estoque);