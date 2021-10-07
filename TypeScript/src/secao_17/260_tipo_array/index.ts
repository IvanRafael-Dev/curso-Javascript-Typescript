// Array<T> - T[]

function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((acc, curr) => acc + curr);
}

const result = multiplyArgs(1, 2, 3, 4);
console.log(result, 'type:', typeof result);

const concat = concatStrings('i', 'v', 'a', 'n');
console.log(concat, 'type:', typeof concat);

function concatToUpperCase(array: Array<string>): string {
  return array.reduce((acc, curr) => acc + curr.toUpperCase(), '');
}

function upperCasedArray(array: string[]): string[] {
  return array.map((value) => value.toUpperCase());
}

const concatToUpper = concatToUpperCase(['l', 'i', 'n', 'u', 'x']);
const upperArray = upperCasedArray(['a', 'b', 'c']);
console.log(concatToUpper);
console.log(upperArray);
