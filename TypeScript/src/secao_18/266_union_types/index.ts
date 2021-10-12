// unios types
// string | number | boolean

function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

console.log(add(2, 2));
console.log(add('Ivan', 'Rafael'));
