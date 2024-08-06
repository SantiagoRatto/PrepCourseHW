function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var cuenta = 0;
   for (var i = 1; i < n + 1; i = i + 1) {
      if (cuenta > 100) break;
      cuenta = cuenta + i;
    }
    return (cuenta);
}

module.exports = sumarHastaNConBreak;
