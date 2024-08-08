function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var cuenta = arguments.length;
  var producto = 1;
  for (var i = 0; i < cuenta; i++){
    producto = producto * arguments[i];
  }
  if (cuenta == 0){
    return (0);
  } else {
    return (producto);
  }
}

module.exports = multiplicarArgumentos;
