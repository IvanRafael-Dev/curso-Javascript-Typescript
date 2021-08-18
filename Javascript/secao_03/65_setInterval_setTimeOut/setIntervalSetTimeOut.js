function showHour() {
  const data = new Date()
  return data.toLocaleTimeString('pt-br')
}

function logShowHour() {
  console.log(showHour())
}

console.log(showHour());

const timer = setInterval(logShowHour, 1000);

setTimeout(() => clearInterval(timer), 10000)
setTimeout(() => console.log('falta 5seg'), 5000)