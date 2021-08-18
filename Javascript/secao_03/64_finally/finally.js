try {
  console.log('abri um arquivo');
  console.log('manipulando um arquivo e pode gerar erro')
  console.log(notExist)
  console.log('fechando o arquivo');
} catch (err) {
  console.log('Error: Manipulando erro');
} finally {
  console.log('Finally: sou sempre executado');
}

function mostraHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Date must de an instanceof Date');
  }
  if (!data) {
    data = new Date();
  }
  
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

try {
  const date = new Date('04-06-1982 13:20:00');
  console.log(mostraHora(date));
  // console.log(mostraHora('date'));

} catch (err) {
    console.log(err);
} finally {
  console.log('Have a nice day');
}

