function contarOcorrenciasA(str) {
  const contador = 0;
  for (const i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      contador++;
    }
  }

  return contador;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question(
    "Digite uma string para verificar a ocorrência da letra 'a': ",
    (entrada) => {
      const quantidade = contarOcorrenciasA(entrada);
      console.log(`A letra 'a' ocorre ${quantidade} vez(es) na string.`);
      rl.close();
    }
  );
}
main();
