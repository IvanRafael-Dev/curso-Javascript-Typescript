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
const zerar = document.querySelector('.zerar');

let seconds = 0;
let timer;

const startTime = () => {
  timer = setInterval(() => {
    seconds++; 
    relogio.innerHTML = getTimeFromSeconds(seconds);
  }, 1000)
};

iniciar.addEventListener('click', (e) => {
  clearInterval(timer) // impede que 2 interval rodem ao mesmo tempo
  startTime()
});

pausar.addEventListener('click', (e) => {
});

zerar.addEventListener('click', (e) => {
  seconds = 0;
});