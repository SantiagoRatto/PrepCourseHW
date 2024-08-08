function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var cuenta = texto.length;
  var invertido = [];
  var separado = [];
  for (var i = 0; i < cuenta; i++){
    separado.push(texto[i]);
  }
  invertido = separado.toReversed();
  return (invertido.join(""));
}

module.exports = invertirTexto;
