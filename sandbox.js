array1 = [4,2,3];
array2 = [1,3,2];
var nuevo = [];
var indice = 0;
for (var i = 0; i < array1.length; i++){
  for (var s = 0; s < array2.length; s++){
    if (array1[i] == array2[s]){
      nuevo[indice] = array1[i];
      console.log ("control " + i + s);
      indice++;
      s = array2.length;
    }
  }
}
console.log (nuevo);


