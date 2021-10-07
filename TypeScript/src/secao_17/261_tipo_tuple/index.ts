// Tuple --> array com tipos especificos de tamanhos fixos

const dadosCliente1: [number, string] = [1, 'Ivan'];
const dadosCliente2: [number, string, string] = [1, 'Ivan', 'Rafael'];
const dadosCliente3: [number, string, number?] = [1, 'Ivan', 38];
const clienteImutavel: readonly [number, string] = [100, 'teste'];

console.log(dadosCliente1);

dadosCliente1[0] = 10; // temos que manter o mesmo tipo
clienteImutavel.push('teste2'); // erro
clienteImutavel.pop('teste3'); // erro
clienteImutavel[0] = 10; // erro

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

const arrayImutavel: readonly string[] = ['Ivan', 'Rafael', 'TS'];
const arrayImutavel2: ReadonlyArray<string> = ['Vamos', 'Estudar'];

console.log(arrayImutavel);
console.log(arrayImutavel2);
