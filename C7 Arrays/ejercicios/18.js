function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = 0;
  var cuenta = resultadosTest.length;
  for (var i = 0; i < cuenta; i++){
    suma = suma + resultadosTest[i];
  }
  var promedio = suma / cuenta;
  return (promedio);

}

module.exports = promedioResultadosTest;
