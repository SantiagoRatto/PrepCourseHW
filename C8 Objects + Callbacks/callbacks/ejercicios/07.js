function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var v = 0;
   var nuevo = [];
   for (var i = 0; i < arrayOfStrings.length; i++){
      if (arrayOfStrings[i][0] == "a"){
         nuevo[v] = arrayOfStrings[i];
         v++;
      }
   }
   return nuevo;
}

module.exports = filter;
