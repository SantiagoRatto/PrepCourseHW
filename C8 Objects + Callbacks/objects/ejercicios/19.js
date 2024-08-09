function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  var cuenta = objetoMuchosUsuarios.length;
  for (var i = 0; i < cuenta; i++){
    objetoMuchosUsuarios[i]["esPremium"] = true;
  }
  return objetoMuchosUsuarios;

}

module.exports = pasarUsuarioAPremium;
