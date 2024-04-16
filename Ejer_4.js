Function Edad(fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var diferencia = fechaActual - fechaNac;
    var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    return edad;
  }
  
  function imprimirMensaje(nombre, apodo, apellido, fechaNacimiento) {
    var edad = Edad(fechaNacimiento);
    console.log("Hola, soy " + nombre + " ( " + apodo + " ) " + apellido + " y tengo " + edad + " años.");
  }
  
  var nombre = "Milagros";
  var apodo = "Mili";
  var apellido = "Gonzalez";
  var fechaNacimiento = "2006-05-22"; 
  
  imprimirMensaje(nombre, apodo, apellido, fechaNacimiento);