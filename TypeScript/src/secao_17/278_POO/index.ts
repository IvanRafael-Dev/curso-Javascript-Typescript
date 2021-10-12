// abstracao
// // isolar de um objeto somente os conceitos necessarios para o funcionamento

export class Pessoa {
  private nome: string;
  private sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// encapsulamento
// // ocultar partes internas e exibir apenas o necessario para o funcionamento

export class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
  }

  public turnOff(): void {
    this.powerStatus = false;
  }

  public getStatus(): boolean {
    return this.powerStatus;
  }
}

// heranca
// // passar as caracteristicas de um objeto para o outro

export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está latindo`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está miando`);
  }
}

// polimorfismo;
// habilidade de assumir diferentes formas

class AnimalSounds {
  public playSound(animal: Animal) {
    animal.makeNoise();
  }
}

const teleka = new Dog('Teleka');
const fifi = new Cat('Fifi');

const animalSounds = new AnimalSounds();

animalSounds.playSound(teleka);
animalSounds.playSound(fifi);
