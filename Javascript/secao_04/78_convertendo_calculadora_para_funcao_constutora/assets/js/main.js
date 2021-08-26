function Calculadora() {
  const display = document.querySelector('.display');

  this.inicia = () => {
    cliqueBotoes();
    pressionaEnter();
  };
  
  const btnParaDisplay= (valor) => {
    display.value += valor;
  };

  const clearDisplay = () => {
    display.value = '';
  };
  
  const btnDel = (currentValue) => {
    display.value = currentValue.slice(0, -1);      
  };
  
  const pressionaEnter = () => {
    display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13 && display.value) {
        realizaConta();
      }
    });
  };

  const realizaConta = () => {
    try {
      display.value = eval(display.value);
    } catch (e) {
      console.log(e.message + '\nUtilize apenas números.');
      alert('Não foi possível realizar a conta');
      clearDisplay();
    }
  };
  
  const cliqueBotoes = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;
      if (el.classList.contains('btn-num')) {
        btnParaDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        clearDisplay();
      }

      if (el.classList.contains('btn-del')) {
        btnDel(display.value);
      }

      if (el.classList.contains('btn-eq')) {
        realizaConta()
      }
    });
  };
  
}

const calc = new Calculadora();
console.log(calc);
calc.inicia();