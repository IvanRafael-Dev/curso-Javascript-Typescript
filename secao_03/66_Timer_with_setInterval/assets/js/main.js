const getTimeFromSeconds = (seconds) => {
  const data = new Date(seconds * 1000); // recebe em ms
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'GMT' // local time, iniciar em 00 hora
  });
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

let seconds = 0;

const startTime = () => {
  const timer = setInterval(() => {
    seconds++; 
    relogio.innerHTML = getTimeFromSeconds(seconds);
  }, 1000)
  return timer;
};

iniciar.addEventListener('click', (e) => {
  startTime()
});

pausar.addEventListener('click', (e) => {
  clearInterval(startTime())
});

zerar.addEventListener('click', (e) => {
  alert('cliquei no zerar')
});