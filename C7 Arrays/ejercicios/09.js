function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var max = array.length;
   var random = Math.random() * max;
   var randomInt = Math.floor(random);
   var elementoRandom = array[randomInt];
   return (elementoRandom);
}


module.exports = obtenerElementoAleatorio;
