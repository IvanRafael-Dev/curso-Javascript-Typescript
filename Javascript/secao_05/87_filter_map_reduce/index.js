const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobrarNumerosParesESomar = numeros
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, curr) => acc += curr, 0);

console.log(dobrarNumerosParesESomar);