function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var verificador = 0;
   var cuenta1 = str1.length;
   var cuenta2 = str2.length;
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();

   for (var i = 0; i < cuenta1; i++){
      for (var o = 0; o < cuenta2; o++){
         if (str1[i] == str2[o]){
            verificador++;
            o = cuenta2;
         }
      }
   }
   if (verificador == cuenta1 && verificador == cuenta2){
      return (true);
   } else {
      return (false);
   }
}

var prueba = "Hola mundo";
var prueba2 = "Mundo hola";
esAnagrama(prueba, prueba2);

module.exports = esAnagrama;
