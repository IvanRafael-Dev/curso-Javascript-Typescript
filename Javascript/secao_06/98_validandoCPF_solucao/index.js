function CPF(inputCPF) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return inputCPF.replace(/\D+/g, '');
    }
  });
}

CPF.prototype.valida = function() {
  if (!this.cpfLimpo) return false
  if (this.cpfLimpo.length !== 11) return false
  if (this.isSequencia()) return false
  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const primeiroDigito = this.criaDigito(cpfParcial);
  const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito);
  const novoCPF = cpfParcial + primeiroDigito + segundoDigito;
  return novoCPF === this.cpfLimpo;
}

CPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  const total = cpfArray.reduce((acc, curr, index, array) => {
    acc += Number(curr) * (array.length + 1 - index);
    return acc;
  }, 0)
  const digito = 11 - total % 11;
  return digito > 9 ? '0' : String(digito);
}

CPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo
}

CPF.prototype.geraCPFValido = function () {
  const gerador = [random1000(), random1000(), random1000()].join('');
  const primeiroDigito = this.criaDigito(gerador);
  const segundoDigito = this.criaDigito(gerador + primeiroDigito);
  const cpfGerado = gerador + primeiroDigito + segundoDigito;
  return cpfGerado;
}

const random1000 = () => Math.round(Math.random() * 1000)

const cpf = new CPF('30077199847');
console.log(cpf.valida());

const novoCPFValido = cpf.geraCPFValido()
console.log(novoCPFValido);

const outroCPF = new CPF(novoCPFValido)
console.log(outroCPF.valida());