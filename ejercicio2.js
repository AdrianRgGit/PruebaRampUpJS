let input = document.querySelector("input#num");
let nUsuario = input.getAttribute("value");

// console.log(nUsuario);

for (let i = 0; i <= nUsuario; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}


