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

  // isInfoValid() {
  //   let valid = true;

  //   for (let field of this.)
  // }
}

const validaForm = new ValidaFormulario();