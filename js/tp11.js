/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

*/
let numero = parseInt(prompt("Por favor, introduce un número:"));
let divisibles = [];

if (numero % 2 === 0) {
    divisibles.push(2);//*
}
if (numero % 3 === 0) {
    divisibles.push(3);
}
if (numero % 5 === 0) {
    divisibles.push(5);
}
if (numero % 7 === 0) {
    divisibles.push(7);
}

if (divisibles.length > 0) {
    document.write("El " + numero + " es divisible por " + divisibles.join(', ') + ".");
} else {
    document.write("El " + numero + " no es divisible por ninguno de los cuatro números (2, 3, 5 o 7).");
}

/*agregue un array llamado divisibles para guardar los números por los que es divisible, luego, verificamos si el número es divisible por cada uno de los números (2, 3, 5 y 7) y, si lo es, se agrega ese número al array divisibles. al final comprobamos si el array divisibles tiene elementos, si es así, se muestran los números por los que es divisible en el mensaje de salida, utilizando join() para separarlos por comas. Si no es divisible por ninguno, se muestra un mensaje que dice que no es divisible por ninguno de los cuatro números.
*/