let input = document.querySelector("input#num");
let texto = document.querySelector("p#texto")
let nUsuario = input.getAttribute("value");
let nUsuario50 = parseInt(nUsuario) + 50;
// console.log(nUsuario);
// console.log(nUsuario50);

for (let i = nUsuario; i <= nUsuario50; i++) {
  if (i % 2 != 0) {
    const elemento = document.createElement("p");
    elemento.textContent = i;
    texto.append(elemento);
    console.log(i);
  }
}

// No consigo que al variar el valor del input que he puesto en la web, me cambie el value.