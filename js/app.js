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

  if(fecha.match(/[-]/g)){
    return null;
  }else{
    // Ajustamos el formato a new Date()
    fecha = fecha.split('/');
    fecha = `${fecha[1]}/${fecha[0]}/${fecha[2]}`;
    
    // Asignamos la fecha y el año para poder operar en el formato adecuado
    let date = new Date(fecha);
    let year = date.getFullYear();
    
    // Comprobamos que el mes sea enero y que no pase del dia 6 sino vamos al año siguente
    if(date.getMonth() > 0){
      year += 1;
    }else{
      date.getDate() > 6 ? year += 1 : '';
    }
    
    // Asignamos el dia de reyes para poder operar
    let reyes = new Date(year, 0, 6)
    
    let diff = (reyes.getTime() - date.getTime())/(1000*60*60*24)
    diff = Math.floor(Number(diff))
    return diff;
  }
}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){
  let numAleatorio = 0;
  
  if(comienzo == fin){
    return fin;
  }else if(fin < comienzo){
    return null;
  }else if(isNaN(comienzo) || isNaN(fin) ||comienzo < 0 ){
    return null;
  }else{
    while(numAleatorio < comienzo || numAleatorio > fin){
      
      numAleatorio = Math.ceil(Math.random()*(fin - comienzo + 1) + comienzo)
    }
      return Number(numAleatorio);
  }
}
//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){
  if(!isNaN(cadena)){
    return false;
  
  }else{
    
    let cont = 0;
    let palabra = cadena.replaceAll(' ', '').toLowerCase();
    let reverseCont= palabra.length-1;
  
    if(palabra == "" ){
      return false;
    }else if(!isNaN(cadena)){
      return null;
    }else{

      while(cont <= reverseCont){
        
        if(palabra[cont] != palabra[reverseCont]){
          return false;
        }else {
          cont++;
          reverseCont--;
        }
  
      }
      return true;
    }
  }
}

// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  
  if(typeof(cadena) != 'string'){
    return null;

  }else if(cadena == ""){
    return cadena;

  }else{
    
    cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let arrayCadena = cadena.split(' ');
    let palabra = '';
    
    for(let i = 1; i < arrayCadena.length; i++){
  
      if(arrayCadena[i] == ""){
        while(arrayCadena[i] == ""){
          arrayCadena.splice(i, 1);
        }
        palabra = arrayCadena[i];
        palabra = palabra.replace(palabra[0], palabra[0].toUpperCase());
        arrayCadena[i] = palabra;
      }else{
        palabra = arrayCadena[i];
        palabra = palabra.replace(palabra[0], palabra[0].toUpperCase());
        arrayCadena[i] = palabra;
      }
    }
    
    arrayCadena = arrayCadena.join('')
    return arrayCadena;
  }
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
  let unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  let especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve'];
  let decenas = ['veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  let centenas = ['cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  if(num > 999999 || !Number.isInteger(num) || num < 0){
    throw 'El número debe ser un entero positivo entre 0 y 999,999.' ;
  }
  else if( num >= 100 && num < 1000){
    let centena = String(num)[0];
    let decena = String(num)[1];
    let unidad = String(num)[2];

    if(num > 100 && num < 110){
      
      centenas = centenas[centena - 1].split('').concat('to').join('') +' '+ unidades[unidad];
      return centenas;

    }else if(num >= 110 && num < 200){
      
      if(num >= 110 && num < 120){
        centenas = centenas[centena - 1].split('').concat('to').join('') +' '+ especiales[unidad];
        return centenas;

      }else if(num >= 120 && num < 130){
        numero = decenas[decena - 2].split('').slice(0,5).concat('i').join('')
        centenas = centenas[centena - 1].split('').concat('to').join('') +' '+numero+' y '+ unidades[unidad];
        return centenas;
      }else{
        centenas = centenas[centena - 1].split('').concat('to').join('') +' '+decenas[decena-2]+' y '+ unidades[unidad];
      }
      
      
    }else if(num >= 200 || num == 100){
      if(decena == 1){
        centenas = centenas[centena - 1].split('').concat('to').join('') +' '+ especiales[unidad];
        return centenas;

      }else if(decena == 2){
        numero = decenas[decena - 2].split('').slice(0,5).concat('i').join('')
        centenas = centenas[centena - 1].split('').concat('to').join('') +' '+numero+' y '+ unidades[unidad];
        return centenas;
      }else{
        if(unidad == 0 && decena == 0){
          return centenas[String(num)[0]-1]
        }else if(unidad == 0){
          centenas = centenas[centena - 1] +' '+decenas[decena-2];
          return centenas;
        }else{
          centenas = centenas[centena - 1] +' '+decenas[decena-2]+' y '+ unidades[unidad];
          return centenas
        }
      }

    }

  }else if(num < 10){
    return unidades[num];
  
  }else if (num >=10 && num < 20){
    
    let especial = String(num)[1];
    return especiales[especial];
  
  }else if(num >= 20 && num < 100){
  
    let decena = String(num)[0];
    let unidad = String(num)[1];

    if(unidad > 0){
      let numero = '';
      if(num >= 21 && num < 30){
        numero = decenas[decena - 2].split('').slice(0,5).concat('i').join('') +''+ unidades[unidad];
      }else{
        numero = decenas[decena - 2] +' y '+unidades[unidad];
      }
      return numero;
    }else{
      return decenas[decena - 2];
    }
  }
}

// Crear una función que devuelva el número de días que quedan para la próxima Navidad

// function unidades(num){
//   let unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
//   return unidades[num];
// }

// function decenas(num){
  
//   let decenas = ['veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  
//   // if (num >=10 && num < 20){
    
//   //   let especial = String(num)[1];
//   //   return especiales[especial];
  
//   // }else if(num >= 20 && num < 100){
  
//   //   let decena = String(num)[0];

//   //   if(num >= 21 && num < 30){
//   //     numero = decenas[decena - 2].split('').slice(0,5).concat('i').join('') +''+ unidades[unidad];
//   //   }else{
//   //     numero = decenas[decena - 2] +' y '+unidades[unidad];
//   //   }
//   //   return numero;
//   // }
// }
// function centenas(){

// }