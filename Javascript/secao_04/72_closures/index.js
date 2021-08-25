function retornaFuncao(nome) {
  return function () {
    return nome;
  }
}
// habilidade que a funcao tem de enxergar seu escopo lexico

const umaFuncao = retornaFuncao('Ivan');
const umaFuncao2 = retornaFuncao('Rafael')

// abrir index.html no browser para verificar closures de funcoes no console
console.dir(umaFuncao);
console.dir(umaFuncao2);
console.log(umaFuncao(), umaFuncao2());