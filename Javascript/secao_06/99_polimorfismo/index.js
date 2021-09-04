// polimorfismo
// metodos se comportarem de maneira diferente em subclasses (classes filhas)

// superclasse (classe mãe)
function Conta(ag, conta, saldo) {
  this.ag = ag;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if (this.saldo < valor) {
    this.verSaldo();
    return;
  };

  this.saldo -= valor;
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
}
Conta.prototype.verSaldo = function() {
  console.log(`ag.: ${this.ag}\nC/c: ${this.conta}\nSaldo: R$${this.saldo}`);
};

const contaIvan = new Conta(001, 1313, 100);
console.log(contaIvan);
contaIvan.verSaldo()
contaIvan.depositar(100)