function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var cuenta = array.length;
  var nuevo = [];
  for (var i = 0; i < cuenta; i++){
    nuevo [i] = array[i] * i;
  }
  return (nuevo);
}

module.exports = multiplicarElementosPorIndice;
