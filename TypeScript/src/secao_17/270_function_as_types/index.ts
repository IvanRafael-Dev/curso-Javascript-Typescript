type MapStringCbFn = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringCbFn): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const mapToUpper = (item: string): string => {
  return item.toUpperCase();
};

const abcToUpper = mapStrings(abc, mapToUpper);
// const abcWithHyphen = mapStrings(abc, (item) => item.concat('-')); // TS já sabe que meu item eh uma string o que facilita demais!

const ABC = ['A', 'B', 'C', 'D', 'E', 'F'];

const aBCtoLower = mapStrings(ABC, (item) => item.toLowerCase());

console.log(abcToUpper);
console.log(aBCtoLower);
