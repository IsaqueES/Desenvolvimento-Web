let rolaDado = function () {
  let dado = Math.floor(Math.random() * 6) + 1;
  console.log(dado);
};

let chamaDuasVezes = function (func) {
  func();
  func();
};

chamaDuasVezes(rolaDado);
