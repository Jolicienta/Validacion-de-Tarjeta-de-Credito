##Programa de Validación de Tarjeta de Crédito

##### 1) Interfaz con el Usuario

Mediante el uso de una función **Prompt** le pido al usuario el "número de su tarjeta de crédito".


##### 2) El Programa Inicia

* PASAR DE STRING A NÚMEROS

  Mediante una función transforma el número de tarjeta ingresado que es reconocido como un string por el programa, a un *array de números*. Una vez logrado, otra función comenzará con el proceso de validación.
  
 
* VALIDACIÓN
  
  Aquí otra función será la encargada de mediante la "fórmula de validación" comenzar el proceso:
  
           1) Invierto el orden del array,
           2) Saco los números en las posiciones pares (no índices pares) 
              y los multiplico por dos,
           3) Si la suma me da un numero mayor que diez (osea, de dos                 dígitos), ambos se sumaran entre sí y me daran un nuevo 
              número que reemplazará al que inicialmente estaba en esa
              posición.
  
  Una vez obtenido este nuevo array mediante una nueva función, sumaré todos los digitos de este y si se cumple la condición:
  
                (suma de los números del array) % 10 === 0

  Significará que la tarjeta de crédito es válida, en cuyo caso se le mostrará esta respuesta al usuario mediante un **Alert**. En el caso contrario se realiza lo mismo pero con el mensaje de que "no es válida"
  
  

El diagrama de flujo sería algo así:

[diagrama de flujo Validación de Tarjeta de Crédito](https://drive.google.com/file/d/0B0ZLNSf1dRANZ3FmVTQ2b3dUVDQ/view)


******
Este programa fue creado por **Natalia Campos Godoy**, y su última modificación fue realizada el día 5 de octubre del 2017 a las 10.30 hrs.
######**Versión** `0.0.1`

