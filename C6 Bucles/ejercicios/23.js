function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  for (var i = 2; i < numero / 2; i++){
    if (numero % i == 0) break;
  }
  if (numero % i == 0 && numero != i){
    return (false);
  } else {
    return (true);
  }
}

module.exports = esNumeroPrimo;
