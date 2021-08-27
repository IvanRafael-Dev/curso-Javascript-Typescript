// funcao recursiva

function recursiva(num) {
  console.log(num);
  if (num >= 10) return;
  num++;
  recursiva(num);
}

recursiva(0);

function contaDe(min, max) {
  console.log(min);
  if (min === max) return;
  contaDe(min + 1, max);
}

contaDe(6, 10);

function fatorialDe(num) {
  if (num === 0) {
    return 1;
  } else {
    console.log(num);
    return num * fatorialDe(num - 1);
  }
  // return num === 0 ? 1 : num * fatorialDe(num - 1) // num 5 * 4
}

console.log(fatorialDe(5));

function somaAdjacentes(num) {
  return num === 0 ? 0 : num += somaAdjacentes(num - 1)
}

console.log(somaAdjacentes(5));