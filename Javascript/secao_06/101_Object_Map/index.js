// objeto map

const pessoas = [
  { id: 3, nome: 'Ivan' },
  { id: 2, nome: 'Fifi' },
  { id: 1, nome: 'Ticinha' },
]

// por exemplo
// const novasPessoas = {};
// for (let { id, nome } of pessoas) {
//   novasPessoas[id] = { id, nome };
// }

// console.log(novasPessoas); //muda o type da key, muda ordem, pode ser um problema


// utilizando o Objecto Map()

const novasPessoas = new Map();
for (let { id, nome } of pessoas) {
  novasPessoas.set(id, { id, nome });
}

novasPessoas.delete(2)

for (let [index, pessoa] of novasPessoas) {
  console.log(index, pessoa);
}


// console.log(novasPessoas.entries());

// console.log(novasPessoas);