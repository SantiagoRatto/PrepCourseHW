function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var contador = 0;
  var cuenta = array.length;
  for (var i = 0; i < cuenta; i++){
    if (array[i] > 10){
      contador++;
    }
  }
  return (contador);
}

module.exports = contarElementosMayoresA10;
