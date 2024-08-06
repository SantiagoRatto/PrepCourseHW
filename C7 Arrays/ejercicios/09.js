function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var max = array.length;
   var random = Math.random * max;
   return (array[random]);
}

module.exports = obtenerElementoAleatorio;
