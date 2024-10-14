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
  if(isNaN(numero) || numero == ""){
    console.log('aqui');
    return null;
  }else{
    let cadenaNum = String(numero);
    // console.log(cadenaNum.);
    for(let i = cadenaNum.length; i >= 0; i--){
      let cont = 0;
      cont++;
      let nuevoNum = nuevoNum + cadenaNum[i] ;

      if(cont == 3){

      }
      console.log(cadenaNum[i]);

    }
    let numFormateado = cadenaNum.replace('.', ',');
    return numFormateado;
  }
}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
 
  }


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  
}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){

}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){

  
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
 

}
