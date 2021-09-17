class CPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ''),
    })
  }

  isSequence() {
    const repeticao = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    return repeticao === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfParcial);
    const digito2 = this.geraDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
  }

  geraDigito(cpfParcial) {
    let total = 0;
    let multReverso = cpfParcial.length + 1;
    for (let stringNums of cpfParcial) {
      total += multReverso * Number(stringNums)
      multReverso--;
    }
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
  }


  valida() {
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.isSequence()) return false;
    this.geraNovoCPF();
    return this.novoCPF === this.cpfLimpo;
  }
}

const cpf = new CPF('300.771.998-47');
// const cpf = new CPF('22222222222');

if (cpf.valida()) {
  console.log(`O CPF: ${cpf.cpfLimpo} é válido `);
} else {
  console.log(`O CPF: ${cpf.cpfLimpo} é inválido `);

}