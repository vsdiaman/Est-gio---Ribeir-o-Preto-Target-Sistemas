function pertenceFibonacci(numero) {
  const a = 0;
  const b = 1;
  if (numero === a || numero === b) {
    return true;
  }
  while (b < numero) {
    const temp = a + b;
    a = b;
    b = temp;
    if (b === numero) {
      return true;
    }
  }
  return false;
}
function main() {
  let numero = 2222;
  if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }
}
main();
