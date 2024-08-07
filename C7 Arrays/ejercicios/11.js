function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var duplicado = [];
  var cuenta = array.length;
  for (var i = 0; i < cuenta; i++){
    duplicado[i] = array[i] * 2;
  }
  return (duplicado);
}

module.exports = duplicarElementos;
