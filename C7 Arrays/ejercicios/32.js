function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var cuenta = string.length;
  var invertido = [];
  var separado = [];
  for (var i = 0; i < cuenta; i++){
    separado.push(string[i]);
  }
  invertido = separado.toReversed();
  invertido = invertido.join("");
  if (string == invertido){
    return (true);
  } else {
    return (false);
  }

}

module.exports = esPalindromo;