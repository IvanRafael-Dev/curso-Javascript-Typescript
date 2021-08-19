function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Ivan',
  sobreNome: 'Rafael',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobreNome);
  },
};

semRetorno('Ivan', 'Rafael');
pessoa.exibirNome();
