function myTimer() {

  const getTimeFromSeconds = (seconds) => {
    const data = new Date(seconds * 1000); // recebe em ms
    return data.toLocaleTimeString('pt-br', {
      hour12: false,
      timeZone: 'GMT' // local time, iniciar em 00 hora
    });
  };

  const relogio = document.querySelector('.relogio');

  let seconds = 0;
  let timer;

  const startTime = () => {
    timer = setInterval(() => {
      seconds++; 
      relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  };

  document.addEventListener('click', ({ target }) => {
    switch (target.className) {
      case 'iniciar':
        clearInterval(timer); // impede que 2 interval rodem ao mesmo tempo
        relogio.classList.remove('pause');
        startTime(); break;

      case 'pausar':
        clearInterval(timer);
        relogio.classList.add('pause'); break;

      case 'zerar': 
        clearInterval(timer);
        relogio.classList.remove('pause');
        relogio.innerHTML = '00:00:00'
        seconds = 0; break;

      default: 
        console.log('Meu Timer!!');
    }
  });
}

myTimer();