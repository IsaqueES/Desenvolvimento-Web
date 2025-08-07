/*
Faça um programa para mudar o fundo da aplicação para uma
cor do arco-íris a cada 1 segundo.
Mantenha em loop.
Utilizar async/await
*/

let cores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let body = document.body;

function loopCores() {
  cores.forEach((cor, index) => {
    setTimeout(() => {
      body.style.backgroundColor = cor;
      console.log("Cor:", cor);

      if (index === cores.length - 1) {
        loopCores();
      }
    }, 1000);
  });
}

loopCores();
