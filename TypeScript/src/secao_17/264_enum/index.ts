// mais de uma opcao para algo, opcoes pré definidas

enum Cores {
  VERMELHO = 0, // 0
  AZUL, // 1
  AMARELO, // 2
  // ROXO = 'Roxo',
  // Azul, // precisa de um initializer
  VERDE = 10,
  ROSA, // aqui ele volta a entender a sequencia
}

enum Cores {
  VOU = 'VOU',
  UNIR = 11,
  AUTO,
}

enum Estados {
  SAO_PAULO,
  MINAS_GERAIS,
  PIAUÍ,
}

console.log(Cores[1]);

console.log(Cores['AZUL']);

function showEnum(cor: Cores): void {
  console.log(Cores[cor]);
}

showEnum(11);

function showEstados(estado: Estados): void {
  console.log(Estados[estado]);
}

showEstados(2);
