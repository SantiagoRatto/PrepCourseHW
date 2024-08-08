function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (arr[0] == undefined || Array.isArray(arr) == false){
    return (false);
  } else {
    return (true);
  }
}

module.exports = esArrayNoVacio;