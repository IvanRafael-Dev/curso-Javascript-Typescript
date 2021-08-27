// funcoes geradoras

// lazy evaluation

function* geradora1() {
  // codigo qualquer...

  yield 'Valor1'
  // codigo qualquer...

  yield 'Valor2'
  // codigo qualquer...

  yield 'Valor3'
}

const g1 = geradora1();

for (let valor of g1) {
  console.log(valor)
}

function* contador() {
  let i = 0;
  while(true) {
    yield i;
    i++;
  }
}

// const contador1 = contador();
// console.log(contador1.next().value);
// console.log(contador1.next().value);
// console.log(contador1.next().value);
// console.log(contador1.next().value);
// console.log(contador1.next().value);


////////////////////////////////

function* geradora2() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora3() {
  yield* geradora2();
  yield 3;
  yield 4;
  yield 5;
}

const g3 = geradora3();

for (let valor of g3) console.log(valor);

function* geradora5() {
  yield function () {
    console.log('next do yield1')
  }
  yield function () {
    console.log('next do yield2')
  }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1()
func2();