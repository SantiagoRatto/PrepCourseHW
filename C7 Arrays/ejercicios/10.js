function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var largo = null;
  var elemento = null;
  var contador = array.length;
  for (var i = 0; i < contador; i++){
    elemento = array[i];
    largo = elemento.length;
    if (largo >= 5){
      return (elemento);
    }
    if (largo >= 5) break;
    if (largo < 5 && i == contador - 1){
      return (undefined);
    }
  }

  
}



module.exports = obtenerPrimerStringLargo;
