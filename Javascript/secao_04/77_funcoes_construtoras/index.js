// funcao construtoras tbm retornan objetos como as funcoes fabricas
// construtora --> precisamos iniciar o nome com Letra Maiuscula
// eh utilizada a palavra new para invocalas

function Pessoa(nome, sobrenome) { // eh como se Pessoa ja fosse um objeto
  // nao tenho acesso a pessoa criada
  // atributos ou metodos privados
  const ID = 123456;
  const metodoInterno = () => {

  }

  // tenho acesso atraves da pessoa criada
  // atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

// "new" cria um novo objeto vazio, faz o this apontar para o objeto e retorna implicitamente o objeto para a variavel
const pessoa1 = new Pessoa('Ivan', 'Rafael'); 
console.log(pessoa1.nomeCompleto())
console.log(pessoa1); 