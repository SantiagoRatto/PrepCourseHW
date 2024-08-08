function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var v = 1;
  var cuenta = numeros.length;
  for (var i = 0; i < cuenta; i++){
    v = i + 1;
    while (v < cuenta){
      if (numeros[v] == numeros[i]) break;
      v++;
    }
    if (numeros [v] == undefined && i < v - 1){
      v = v-1;
    }
    if (numeros[v] == numeros[i]) break;
  }
  if (numeros[i] == numeros[v]){
    return (numeros [v]);
  }
}

var prueba = [1,2,3,4,5,1];
encontrarElementoRepetido(prueba);

module.exports = encontrarElementoRepetido;