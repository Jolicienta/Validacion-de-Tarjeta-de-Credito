/*En esta parte del programa planteo la interfaz con el usuario donde le pedire el número de su tarjeta, que será mi
valor a ser evaluado posteriormente por mi programa*/
var numeroDeTarjetaStr= prompt("Bienvenido al programa Validador de Tarjeta. Por favor ingrese el numero de su tarjeta a continuación");
validacionDeTarjeta();//con esto yo le devolveré finalmente la respuesta de si su tarjeta es o no válida

/*Como el valor ingresado por el usuario sera para mi programa un String y yo necesito evaluar números,
creo esta función que me permite pasar de carácteres alfabéticos a números*/
function deLetrasANumeros(){
  var numeroDeTarjeta= [];
  for( var i = 0; i < numeroDeTarjetaStr.lenght; i++){
    var numeros= parseInt(numeroDeTarjetaStr(i));
    numeroDeTarjeta.push()
  }
}

/*Con esta función obtenedré los nuevos valores para los números que se encuentran en posiciones pares (esto no implica
que su índice sea par)*/
function nuevosDigitosPares(){
  var numeroDeTarjetaInvertido= numeroDeTarjeta.reverse();
  for( var i = 1; i <= numeroDeTarjeta.lenght; i += 2){
    var nuevosValoresPares= numeroDeTarjetaInvertido[i] * 2;//Luego de encontrar esos valores los multiplico por 2...

    while ( nuevosValoresPares >= 10 ){//...y si su valor es mayor que 9 (osea posee dos dígitos),...
/*...hago que estos dos dígitos se sumen entre sí para así obtener el valor que luego utilizaré para la función de validar
la tarjeta*/
      var digitosPares=[];
      var numAString= nuevosValoresPares.string();
      var numSeparadosStr= numAString.split("");
      var sumaDeDigitos= (parseInt(numSeparadosStr[0]) + parseInt(numSeparadosStr[1]));
      digitosPares.push()
    }
  }

/*Como ya obtuve los nuevos números en las posiciones pares, prosigo a rescatar del número inicialmente ingresado por el usuario
aquellos valores que quedaron sin cambiar, osea los que estaban en las posiciones impares*/
function obteniendoDigitosImpares(){
  var digitosImpares = [];
  for ( var i = 0; i <= numeroDeTarjeta.lenght; i += 2 ){
    digitosImpares.push();
  }
}

//Con esta función creo mi nuevo array con los digitos en posiciones pares e impares obtenidos anteriormente
function unirArrays(){
  do{
    var nuevoNumArray= digitosPares.concat(digitosImpares);
    return nuevoNumArray;
  }

//Y prosigo a crear la función que me sumará entre sí los valores del array
function comprobacionTarjeta(){
  for( (var i = 0; i <= nuevoNumArray.lenght; i++) && (var j = i + 1; j <= nuevoNumArray.lenght; j++)){
      var suma= nuevoNumArray[i] + nuevoNumArray[j];
      var nuevoNumArray= nuevoNumArray.slice(2,nuevoNumArray.lenght);
      return nuevoNumArray;
    }
}

/*Finalmente el paso final es ver si el número obtenido de la suma anterior al ser dividido por 10 me da como
residuo 0. Sólo si esta condición final se cumple le diré al usuario que su tarjeta de crédito es válida*/
function validacionDeTarjeta(){
  if ( nuevoNumArray % 10 === 0 ){
    alert("Su tarjeta es válida")
  }
  else alert("Su tarjeta no es válida") // En caso contrario, se le dirá que no lo es
}
