try {  
  console.log(notExist)
} catch (err) { // nunca mostre error nao tratados para o usuario
  console.log('Ocorreu um erro');
  const inicio = err['message'].split(' ').shift();
  console.error(err.message);
  console.log(`${ inicio } não foi definida`);
}

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('a and b must be numbers');
  }
  return a + b;
}

try{
  console.log(sum(2, 'a'));
} catch(err) {
  console.log('Error:', err.message);
}
