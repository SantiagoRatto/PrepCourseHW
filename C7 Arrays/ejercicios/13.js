function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var elemento;
  var soloPares = [];
  var cuenta = array.length;
  for (var i = 0; i < cuenta; i++){
    if(array[i] % 2 == 0){
      elemento = array[i];
      soloPares.push(elemento);
    }
  }
  return (soloPares);
}

module.exports = filtrarNumerosPares;
