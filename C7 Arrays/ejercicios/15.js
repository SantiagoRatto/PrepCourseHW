function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var cuenta = array.length;
  var indice = 0;
  var mayor = array[0];
  for (var i = 0; i < cuenta; i++){
    if (array[i] > mayor){
      mayor = array[i];
      indice = i;
    }
  }
  return (indice);
}

module.exports = encontrarIndiceMayor;
