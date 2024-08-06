function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  for (var i = a; i < b; i++){
    a = a * (i + 1);
  }
  return(a);
}


module.exports = productoEntreNúmeros;