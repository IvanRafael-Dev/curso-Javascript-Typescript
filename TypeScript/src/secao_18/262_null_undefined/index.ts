let x;

if (typeof x === 'undefined') x = 20;

console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string, // opcional
): {
  firstName: string;
  lastName?: string; // opcional
} {
  return { firstName, lastName };
}

export function squareOf(x: any): number | null {
  // : number | null
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) {
  // console.log('conta inválida', squareOfTwoNumber * 2); // reconhece o erro
} else {
  console.log(squareOfTwoNumber * 2); // afunilamento, ja entente que é um number
}
