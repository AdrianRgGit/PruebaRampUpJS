let string = "HOLA A TODOS";
let totalLetras = 0;

// Con función

function contarLetras(letra) {
    let stringMinusculas = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (letra === stringMinusculas[i]) {
            totalLetras += 1;
        }
    }
    return totalLetras;
}

contarLetras("a")
// console.log(`La función me retorna ${totalLetras}`)

/*
Con bucle for sin función

let letra = "c";

for (let i = 0; i < string.length; i++) {
    if (letra === string[i]) {
        totalLetras += 1;
    }
}

console.log(`El bucle for me muestra ${totalLetras}`);
*/