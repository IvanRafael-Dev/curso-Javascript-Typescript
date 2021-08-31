/**
  Object.values,
  Object.entries,
  Object.assign(des, any),
  Object.getOwnPropertyDescriptor(o, 'prop'),
  ...spread
  // ja vimos
    Object.keys,
    Object.freeze,
    Object.defineProperty,
    Object.defineProperties,
  //
 */

const produto = { nome: 'Café', preco: 3 };
// const outraCoisa = produto; // ambos apontam para o mesmo lugar da memoria
const outraCoisa = { ...produto }; // lugares diferents da memoria

const caneca = Object.assign(
  {},
  produto,
  { material: 'porcelana' },
  { data: new Date().getTime() }
);
console.log(caneca);

Object.defineProperty(caneca, 'nome', {
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(caneca));
console.log(Object.entries(caneca));
const obj = {}

// só para uma demostracao besta rsrs
for (let [key, value] of Object.entries(caneca)) {
  console.log(key, value);
  obj[key] = value
}

console.log(obj);