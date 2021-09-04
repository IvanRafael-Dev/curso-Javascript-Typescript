// factory function and prototypes

// function criaPessoa(nome, sobrenome) {
//   const pessoaPrototype = {
//     falar() {
//       console.log(`${this.nome} está falando`);
//     },

//     codar() {
//       console.log(`${this.nome} está codando`);
//     },

//     refatorar() {
//       console.log(`${this.nome} está refatorando`);
//     }
//   }
//   return Object.create(pessoaPrototype, {
//     nome: {
//       enumerable: true,
//       value: nome,
//     },
//     sobrenome: {
//       enumerable: true,
//       value: sobrenome,
//     },  
//   })
// }

// const p1 = criaPessoa('Ivan', 'Rafael');
// const p2 = criaPessoa('Elis', 'Regina');
// console.dir(p1)
// console.dir(p2)



// refatorando (COMPOSICAO)

const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const codar = {
  codar() {
    console.log(`${this.nome} está codando`);
  },
};

const refatorar = {
  refatorar() {
    console.log(`${this.nome} está refatorando`);
  }
};

// const pessoaPrototype = { ...falar, ...codar, ...refatorar}
const pessoaPrototype = Object.assign({}, falar, codar, refatorar)

function criaPessoa(nome, sobrenome) {
   return Object.create(pessoaPrototype, {
    nome: {
      enumerable: true,
      value: nome,
    },
    sobrenome: {
      enumerable: true,
      value: sobrenome,
    },  
  })
}

const p3 = criaPessoa('Paty', 'Cabral')