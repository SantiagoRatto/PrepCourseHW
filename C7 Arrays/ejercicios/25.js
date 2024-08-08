function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var cuenta = numeros.length;
  var pares = 0;
  for (var i = 0; i < cuenta; i++){
    if (numeros[i] % 2 == 1) continue;
    pares++;
  }
  return (pares);
}

module.exports = contarParesConContinue;
