function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  for (var i = n - 1; i > 0; i = i - 1) {
    n = n + i;
  }
  return (n);
}

module.exports = sumarHastaN;
