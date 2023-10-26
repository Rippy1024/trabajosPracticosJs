/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
*/
let frase = prompt("Por favor, introduce una frase:");
let vocalesEncontradas = "";

for (let letras = 0; letras < frase.length; letras++) {
    let caracter = frase.charAt(letras).toLowerCase(); //*

    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        vocalesEncontradas += caracter;
    }
}

document.write("Vocales encontradas: " + vocalesEncontradas);

/*.toLowerCase() lo utilice para convertir el caracter a minusculas, asi las comparaciones con las vocales sean insensibles a mayúsculas y minúsculas, es decir, para q se puedan identificar las vocales tanto en mayúsculas como en minúsculas*/