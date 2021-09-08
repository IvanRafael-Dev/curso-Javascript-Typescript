class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const isValidInfo = this.isInfoValid()
    console.log('teste');
  }

  isInfoValid() {
    const fields = document.querySelectorAll('.fields')
    let valid = true;

    for (let field of fields) {
      if (!field.value) {
        let label = field.parentElement.innerText; // poderia ser field.name caso inputs tenham name
        this.throwError(field, `O campo "${label}" não pode estar em branco`)
      }
    }       
  }

  throwError(field, message) {
    const div = document.createElement('div');
    div.innerHTML = message;
    div.classList.add('error-message');
    field.insertAdjacentElement('afterend', div);
    console.log('cai aqui');
  }
}

const validaForm = new ValidaFormulario();