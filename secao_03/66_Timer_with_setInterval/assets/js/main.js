const getTimeFromSeconds = (seconds) => {
  const data = new Date(seconds * 1000); // recebe em ms
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'GMT' // local time, iniciar em 00 hora
  });
}
 
console.log(getTimeFromSeconds(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', (e) => {
  alert('cliquei no iniciar')
});

pausar.addEventListener('click', (e) => {
  alert('cliquei no pausar')
});

zerar.addEventListener('click', (e) => {
  alert('cliquei no zerar')
});