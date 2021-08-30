// defineProperty 
function Produto(nome, preco, estoque) {
  // this.nome = nome; // propriedade publica
  // this.preco = preco; // propriedade publica

  // this.estoque = estoque; // vamos alterar essa propriedade
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // exibe a key
    value: estoque, // agora sim recebe o valor
    writable: false, // pode nao ter o valor alterado
    configurable: false // pode ser apagado ou reconfigurada?
  });

  // se configurable === true posso redefinir as propriedades
  // Object.defineProperty(this, 'estoque', {
  //   enumerable: true, 
  //   value: estoque, 
  //   writable: true, 
  //   configurable: true 
  // });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: nome, 
      writable: true, 
      configurable: true 
    },

    preco: {
      enumerable: true, 
      value: preco, 
      writable: true, 
      configurable: true 
    }
  });
}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1);
console.log(Object.keys(produto1));

for(let key in produto1) console.log(key);