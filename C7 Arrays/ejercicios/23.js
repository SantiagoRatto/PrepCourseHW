function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var aumentado = [];
  aumentado[0] = num + 2;
  for (var i = 0; i < 9; i++){
    aumentado[i + 1] = aumentado[i] + 2;
    if (i + 1 == aumentado[i + 1]) break;
  }
  if (i + 1 == aumentado[i + 1]){
    return ("Se interrumpió la ejecución");
  } else {
    return (aumentado);
  }
}

module.exports = breakStatement;
