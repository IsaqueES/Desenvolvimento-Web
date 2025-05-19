/*
// PROFESSOR
  // ARROW FUNCTION
  let rolaDado = function () {
    let dado = Math.floor(Math.random() * 6) + 1;
    console.log(dado);
  };

  let chamaDuasVezes = (func) => {
    func();
    func();
  };
  chamaDuasVezes(rolaDado , 10);
*/

// EU
// ARROW FUNCTION
let rolaDado = function () {
  let dado = Math.floor(Math.random() * 6) + 1;
  return dado;
};

let chamaDuasVezes = (func) => {
  func();
  func();
};

let botao = document.getElementById("RolaDado");
let divResultado = document.getElementById("resultado");
botao.addEventListener("click", function () {
  let resultado = rolaDado();
  divResultado.innerHTML = resultado;
});
