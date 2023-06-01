let input = document.querySelector("input#num");
let nUsuario = input.getAttribute("value");
let nUsuario50 = parseInt(nUsuario) + 50;
// console.log(nUsuario);
// console.log(nUsuario50);

for (let i = 0; i <= nUsuario50; i++) {
  nUsuario = input.getAttribute("value");
  if (i % 2 != 0) {
    console.log(i);
  }
}