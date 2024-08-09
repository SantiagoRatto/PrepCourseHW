function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var v = 0;
  var t = a;
  for (var i = a; i < b; i++){
    a = a * (i + 1);
    v++;
  }
  if (v % 4 == 0 || t > -1){
  return(a);
  } else {
    return (a * -1);
  }
}


module.exports = productoEntreNúmeros;