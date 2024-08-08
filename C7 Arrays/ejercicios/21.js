function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var control = 0;
  var cuenta = array.length;
  var meses = [];
  for (var i = 0; i < cuenta; i++){
    if (array[i] == "Enero"){
      meses.push("Enero");
      control++;
    }
    if (array[i] == "Marzo"){
      meses.push("Marzo");
      control++;
    }
    if (array[i] == "Noviembre"){
      meses.push("Noviembre");
      control++;
    }
  }
  if (control == 3){
  return (meses);
  } else {
    return ("No se encontraron los meses pedidos");
  }
}

module.exports = mesesDelAño;
