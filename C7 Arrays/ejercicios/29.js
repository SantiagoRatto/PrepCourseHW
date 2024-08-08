function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  var v = null;
  var cuenta = numeros.length;
  for (var i = 0; i < cuenta - 1; i++){
    if (numeros[i] != numeros[i + 1] - 1){
      v = numeros[i] + 1;
    }
  }
  return (v);
}

module.exports = encontrarNumeroFaltante;