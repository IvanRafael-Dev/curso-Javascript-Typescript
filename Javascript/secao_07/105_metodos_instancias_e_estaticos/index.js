//metodos que podemos acessar sem instanciar a classe
// podem nao estar disponiveis dentro da instanciar

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 20;
  }
  
  aumentaVolume() {
    if (this.volume >= 100) return;
    this.volume++;
    console.log(`Volume: ${this.volume}`);
  }

  diminuiVolume() {
    if (this.volume < 1) return;
    this.volume--;
    console.log(`Volume: ${this.volume}`);
  }

  // metodo de instancia
  // ligarNetflix(){

  // }
  // metodo estatico nao pode ser acessado atraves da instancia, apenas atraves da classe
  // nao tem acesso aos dados da intancia
  static ligarNetflix() {
    console.log('Netflix called');
  }
}

const controleLG = new ControleRemoto('LG');
controleLG.aumentaVolume();
controleLG.aumentaVolume();
controleLG.diminuiVolume();
console.log(controleLG);

ControleRemoto.ligarNetflix();