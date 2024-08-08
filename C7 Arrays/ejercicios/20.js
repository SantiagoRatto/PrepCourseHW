function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var control = array[0];
  var iguales = array.every((num) => num == control);
  return (iguales);
}

module.exports = todosIguales;
