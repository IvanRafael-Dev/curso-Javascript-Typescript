export class Musica {
  public readonly nome: string; // acesso dentro eo fora da classe
  private readonly autores: Autores[] = []; // acesso somente dentro da classe
  protected readonly registro: string;

  constructor(nome: string, registro: string) {
    this.nome = nome;
    this.registro = registro;
  }

  addAutor(autor: Autores): void {
    this.autores.push(autor);
  }

  showAutor(): void {
    console.log('Autores: ');
    for (const { nome, sobrenome } of this.autores) {
      console.log(`${nome} ${sobrenome}`);
    }
  }
}

export class Autores {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const nenem = new Musica('neném', 'r3-31424');
const ivan = new Autores('Ivan', 'Rafael');
const Titi = new Autores('Titi', 'Cabral');
const Fifi = new Autores('Fifi', 'Duprat');

nenem.addAutor(Fifi);
nenem.addAutor(Titi);
console.log(nenem);
nenem.addAutor(ivan);

nenem.showAutor();
