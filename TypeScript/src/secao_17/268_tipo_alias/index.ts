// type alias

type Team = {
  name: string;
  engine: string;
  category: AllCars;
  year: number;
};

type FormulaCar = 'F1' | 'F2' | 'F3';
type OtherCar = 'Rally' | 'Stock' | 'Lemans';

type AllCars = FormulaCar | OtherCar;

type Person = {
  name: string;
  gender: 'Female' | 'Male';
  country: string;
  salary: number;
};

type Pilot = {
  name: string;
  gender: 'Female' | 'Male';
  country: string;
  team: Team;
  salary?: number;
};

const ivan: Pilot = {
  name: 'Ivan',
  gender: 'Male',
  country: 'Brazil',
  team: {
    name: 'Mclaren',
    engine: 'Honda',
    category: 'F1',
    year: 1988,
  },
  salary: 10_000,
};

console.log(ivan);

export function setNewPilot(pessoa: Person, team: Team): Pilot {
  return {
    ...pessoa,
    team,
  };
}

const ayrtonSenna: Person = {
  name: 'Ayrton Senna',
  gender: 'Male',
  country: 'Brazil',
  salary: 100_000,
};

const mcLaren: Team = {
  name: 'McLaren',
  engine: 'Honda',
  category: 'F1',
  year: 1988,
};

console.log(setNewPilot(ayrtonSenna, mcLaren));
