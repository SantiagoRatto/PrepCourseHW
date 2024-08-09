function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   var final = [];
   var comp = [];
   var cuenta = list.length;
   for (var i = 0; i < cuenta; i++){
      comp[i] = (list[i][sortBy]);
   }
   comp = comp.toSorted();
   comp = comp.toReversed();
   for (var o = 0; o < cuenta; o++){
      for (o2 = 0; o2 < cuenta; o2++){
         if (comp[o] == list[o2][sortBy]){
            final[o] = list[o2];
         }
      }
   }
   return (final);
}

module.exports = sort;
