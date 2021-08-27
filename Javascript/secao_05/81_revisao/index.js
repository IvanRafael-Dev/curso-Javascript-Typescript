const letras = ['a', 'b', 'c', 'd', 'e', 'f'];

const nomes = new Array('Ivan', 'Paty', 'Ticinha', 'Fifi', 'Titi');
console.log(nomes);

const novo = nomes // valor por referencia
console.log(novo);

const novo2 = [...nomes]; // uma copia, nao eh referencia;

// metodos array

const removido = novo2.pop(); // pop (remove ultimo) --> retorna o elemento removido
console.log(removido);

const primeiro = novo2.shift(); // shift (remove primeiro) --> retorna o elemento removido

novo2.push('Titi'); // add ao final
novo2.unshift('Neném') // add ao comeco
console.log(novo2);

const nomesSlice = nomes.slice(0, 2)
console.log(nomesSlice);
console.log(nomes);
const gatasSlice = nomes.slice(2, -1);
console.log(gatasSlice);

const nome = 'Ivan Rafael Rodrigues';
const nomeArray = nome.split(' ');
console.log(nomeArray);

const stringListaNomes = 'Ivan, Paty, Ticinha, Fifi ,Titi,Neguinha'
const arrayListaNomes = stringListaNomes.split(',');
for (let nome of arrayListaNomes) console.log(nome.trim())

