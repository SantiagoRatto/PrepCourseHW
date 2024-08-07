function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var elemento;
  var ARRAY = [];
  var cuenta = array.length;
  for (var i = 0; i < cuenta; i++){
    elemento = array[i];
    ARRAY[i] = elemento.toUpperCase();
  }
  return (ARRAY);
}

module.exports = convertirStringAMayusculas;
