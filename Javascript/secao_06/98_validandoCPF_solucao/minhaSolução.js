function validaCPF(cpf) {
  cpf = justDigits(cpf);
  checkCPFLength(cpf);
  const cpfArray = Array.from(cpf).slice(0, -2);

  const primeiroDigito = getDigit(cpfArray)
  cpfArray.push(primeiroDigito)  

  const segundoDigito = getDigit(cpfArray)  
  cpfArray.push(segundoDigito);
  return cpf === cpfArray.join('') ? 'CPF válido' : 'CPF inválido';  
}
  

const justDigits = (cpf) => String(cpf).replace(/\D+/g, '');

const checkCPFLength = (cpfDigits) => {
  if (cpfDigits.length !== 11) {
    const error = new Error('Cpf não contém os digitos necessários');
    throw error;
  }
};

const getDigit = (cpfArray) => {
  const getSum = cpfArray
  .reduce((acc, curr, index, array) => {
    let mult = array.length + 1 - index;
    let subTotal = +curr * mult;
    acc += subTotal;
    return acc
  }, 0);
  const result = 11 - getSum % 11;  
  return result > 9 ? 0 : result
}

console.log(validaCPF(30077199847))
