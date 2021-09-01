// 705.484.450-52 070.987.720-03

/*
  // primeiro digito
  705.484.450

   7 0  5  4  8  4  4  5  0 // numeros do cpf
   x x  x  x  x  x  x  x  x // vezes 
  10 9  8  7  6  5  4  3  2 // uma contagem regressiva partindo de 10
   = =  =  =  =  =  =  =  =
  70 0  40 28 48 20 16 15 0 // soma o total ---> 237

  11 - (237 % 11) = 5 (primeiro digito) se for maior que 9 considerar como 0;

  // segundo digito

   7  0  5  4  8  4  4  5  0  5 (inclui o primeiro digito (5))
   x  x  x  x  x  x  x  x  x  x
  11 10  9  8  7  6  5  4  3  2 
   =  =  =  =  =  =  =  =  =  = 
  77  0 45 32 56 24 20 20  0 10 // total ---> 284

  11 - (284 % 11) = 2 (segundo digito) se for maior que 9 considerar como 0;
*/

// algumas coisas que podem ser uteis

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo);

let cpfArray = Array.from(cpfLimpo)
console.log(cpfArray)

console.log(cpfArray.reduce((acc, curr) => acc + Number(curr), 0));
