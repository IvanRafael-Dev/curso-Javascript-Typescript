// splice(indice que comeca, quantos elementos eu removo, elemento a add1, elemento a add2, elemento a add3....)

const nomes = ['Ivan', 'Rafael', 'Paty', 'Raul', 'Chico']

const removidos = nomes.splice(nomes.indexOf('Raul'), 2, 'Fifi', 'Titi'); // modifica o original e retorna um array dos removidos
console.log(nomes);
console.log(removidos);
