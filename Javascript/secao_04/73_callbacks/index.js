function randomTime(min = 1000, max = 3000) {
  const value = Math.round(Math.random() * (max - min) + min);
  console.log('time >>', value);
  return value;
}

function f1(callback) {
  setTimeout(function () {
    console.log('f1');
    callback();
  }, randomTime());
}
function f2(callback) {
  setTimeout(function () {
    console.log('f2');
    callback();
  }, randomTime());
}
function f3(callback) {
  setTimeout(function () {
    console.log('f3');
    callback();
  }, randomTime());
}

// garantindo a ordem de execucao utilizando callbacks, mas eh uma callback hell :-(

// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.log('Olá mundo');
//     })
//   })
// });

console.log('Agora fugindo da callback hell');

f1(f1Callback);

function f1Callback(){
  f2(f2Callback)
}

function f2Callback(){
  f3(f3Callback)
}

function f3Callback(){
  console.log('Olá mundo');
}