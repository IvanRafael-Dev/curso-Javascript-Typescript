// condicional
const body = document.querySelector('body');
if (body) body.style.backgroundColor = 'red'; // estritamento de tipo

// Non-null assertion(!) --> nao recomendado
// const body2 = document.querySelector('body')!;
// body2.style.backgroundColor = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

console.log(body3);

// HTMLElement

const input = document.querySelector('input') as HTMLInputElement;
input.checked = true;
