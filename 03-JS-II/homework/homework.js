// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return Math.max(x, y);
}

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return 'Allowed';
  } else {
    return 'Not allowed';
  }
}
  
function conection(status) {
  if (status === 1) {
    return 'Online';
  } else if (status === 2) {
    return 'Away';
  } else {
    return 'Offline'
  }
}

function saludo(idioma) {
  if (idioma === 'aleman') {
    return 'Guten Tag!';
  } else if (idioma === 'mandarin') {
    return 'Ni Hao!';
  } else if (idioma === 'ingles') {
    return 'Hello!';
  } else (idioma !== 'aleman' || idioma !== 'mandarin' || idioma !== 'ingles' || idioma === undefined); {
    return 'Hola!'
  }
}

function colors(color) {
  switch(color) {
    case "blue":
      return ("This is " + color)
    case "red":
      return ("This is " + color)
    case "green":
      return ("This is " + color)
    case "orange":
      return ("This is " + color)
      default:
        return ("Color not found")
  }
}

function esDiezOCinco(numero) {
  switch(numero) {
    case 10:
      return true
    case 5:
      return true
    default:
      return false
  }
}

function estaEnRango(numero) {
if (numero < 50 && numero > 20) {
  return true
} else {
  return false
}
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero === Math.floor(numero)) {
    return true
  } else {
    return false
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 == 0 && numero % 5 == 0){
    return 'fizzbuzz'
  } else if (numero % 3 == 0) {
    return 'fizz'
  } else if (numero % 5 == 0) {
    return 'buzz'
  } else {
    return numero
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos';
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return 'Error';
   } else if (num1 > 0 && num1 > num2 && num1 > num3) {
    return 'Número 1 es mayor y positivo';
      } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
        } else {
          return false;
          }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero <= 1) {
    return false;
  }
  if (numero === 2) {
    return true;
  }
  var sqrt = Math.sqrt(numero);
  for (var i = 2; i <= sqrt; i++) 
    if (numero % i === 0) {
      return false;
    }
  return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  switch(valor) {
    case true:
      return 'Soy verdadero';
    default:
      return 'Soy falso';
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let tablaDelSeis = []
  for (let i = 0; i <= 10; i++) {
    tablaDelSeis.push(6 * i)
  }
  return tablaDelSeis
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero.toString().length == 3) {
    return true
  }
  return false
}
function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var a = numero
  var i = 0
  do {
    i = i + 1;
    a = a + 5
  } while (i < 8)
  return a
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
