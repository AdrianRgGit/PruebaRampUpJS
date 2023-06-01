let string = "Hola buenos días a todos y todas";
let totalLetras = 0;

// Con función

function contarLetras(letra) {
    for (let i = 0; i < string.length; i++) {
        if (letra === string[i]) {
            totalLetras += 1;
        }
    }
    return totalLetras;
}

contarLetras("h")
console.log(`La función me retorna ${totalLetras}`)

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