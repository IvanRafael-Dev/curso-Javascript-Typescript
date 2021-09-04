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
    console.log('Saldo insuficiente');
    this.verSaldo();
    return;
  };
  this.saldo -= valor;
  this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function() {
  console.log(`ag.: ${this.ag}\nC/c: ${this.conta}\nSaldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(ag, conta, saldo, limite) {
  Conta.call(this, ag, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor) {
  if (this.saldo - valor < -(this.limite)) {
    console.log('Saldo insuficiente');
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
}

function ContaPoupanca(ag, conta, saldo) {
  Conta.call(this, ag, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaIvan = new Conta(001, 1313, 100);
const cCIvan = new ContaCorrente(002, 4567, 1000, 2000);
const cPIvan = new ContaPoupanca(001, 1313, 0);
// console.log(cCIvan);
// console.log(contaIvan);
// contaIvan.verSaldo();
// contaIvan.depositar(100);
// contaIvan.depositar(39);
// contaIvan.sacar(238);
// contaIvan.sacar(1);

// cCIvan.verSaldo()
// cCIvan.sacar(990)
// cCIvan.sacar(1900)
// cCIvan.sacar(1900)
// cCIvan.sacar(120)
// cCIvan.sacar(100)
// cCIvan.sacar(10)
// cCIvan.sacar(1)

cPIvan.verSaldo()
cPIvan.depositar(100)
cPIvan.sacar(90)
cPIvan.sacar(20)