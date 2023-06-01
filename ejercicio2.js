let input = document.querySelector("input#num");
let nUsuario = input.getAttribute("value");
let nUsuario50 = parseInt(nUsuario) + 50;
// console.log(nUsuario);
// console.log(nUsuario50);

for (let i = nUsuario; i <= nUsuario50; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
