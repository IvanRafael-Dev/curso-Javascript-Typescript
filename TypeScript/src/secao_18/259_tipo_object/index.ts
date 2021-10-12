const objectA: {
  chaveA: string;
  chaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectA.chaveC = 'Valor C';

console.log(objectA);
