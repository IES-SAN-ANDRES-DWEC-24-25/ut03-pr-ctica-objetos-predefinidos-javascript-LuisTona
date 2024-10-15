// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual(){
  let fecha = new Date();
  let dia = fecha.getDate() < 10 ? '0'+ fecha.getDate() : fecha.getDate();
  let mes = (fecha.getMonth() + 1) < 10 ? '0'+ fecha.getMonth() : fecha.getMonth()+1;
  let año = fecha.getFullYear();
  
  return dia + '/' + mes +'/'+ año;
}

// Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {
  if (isNaN(radio) || radio < 0) {
    // alert('Por favor, ingrese un radio válido.');
    return null;
  }else if(radio == 0){
    return 0;
  }else{
    let area = Math.PI*(radio**2);
    return Number(area.toFixed(2));
  }
}

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
  const regExp = /[aeiouáéíóúüäëöï]/g;
  if(cadena == ""){
    return 0;
  }else if(!isNaN(cadena)){
    return -1;
  }else{
    let palabra= cadena.toLowerCase();
    let vocales = palabra.match(regExp);
    if(vocales == null){
      return 0;
    }else{
      return vocales.length;
    }
  }
}
  
  
// Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {
  if (isNaN(celsius)) {
    return null;
  }else{
    return Number((celsius * 9/5 + 32).toFixed(2));
  }
}

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {
  if(isNaN(numero) || typeof(numero) != "number"){
    return null;
  }else{
    // Guardamos la parte entera en una variable
    let cadenaNum = String(Math.floor(numero));

    // Separamos la parte decimal de la parte entera y guardamos los decimales en la variable 
    let decimales = String(numero.toFixed(2)).split('.').splice(1);
    
    // Creamos los indices que utilizaremos en el substring
    let indice1 = cadenaNum.length;
    let indice2;
    // Variable que vamos a utilizar para guardar el nuevo formato del numero
    let newFormat = cadenaNum.substring(indice1, indice2);

    // Usamos un bucle while para evaluar de alante hacia atras 
    while(indice1 >= 1 ){
      indice2 = indice1;
      indice1 -= 3;
      newFormat += cadenaNum.
                    substring(indice1, indice2).
                    split('').reverse().join('') + ".";
    } 

    // Damos la vuelta al resultado que nos ha salido del bucle, eliminando el punto inicial
    newFormat = newFormat.split('').reverse().splice(1).join('');
    // Evaluamos si tenemos decimales 
    return Number(decimales) > 0 ? newFormat + ',' + decimales : newFormat;
  }
}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){

}
// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  
}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}





//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){

  
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
 

}
