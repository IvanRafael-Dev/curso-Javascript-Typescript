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
  }

  isInfoValid() {
    const fields = document.querySelectorAll('.fields');
    let valid = true;
    const errorMessages = this.formulario.querySelectorAll('.error-message');
    for (let message of errorMessages) message.remove();

    for (let field of fields) {
      if (!field.value) {
        let label = field.parentElement.innerText; // poderia ser field.name caso inputs tenham name
        this.throwError(field, `O campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if (field.classList.contains('cpf')) {
        console.log(field.value)
      }
    }       
  }

  throwError(field, message) {
    const div = document.createElement('div');
    div.innerHTML = message;
    div.classList.add('error-message');
    field.insertAdjacentElement('afterend', div);
  }
}

const validaForm = new ValidaFormulario();