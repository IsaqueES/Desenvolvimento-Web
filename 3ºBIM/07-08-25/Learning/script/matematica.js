const soma = (valorA,valorB)=>{
    let resultado = valorA + valorB
    return resultado
}

const subtrair = (valorA, valorB) => {
  let resultado = valorA - valorB;
  return resultado;
};

const multiplicacao = (valorA, valorB) => {
  let resultado = valorA * valorB;
  return resultado;
};

const divisao = (valorA, valorB) => {
  let resultado = valorA / valorB;
  return resultado;
};

const potenciacao = (valorA, valorB) => {
  let resultado = valorA ** valorB;
  return resultado;
};

module.exports = {
  soma,
  subtrair,
  multiplicacao,
  divisao,
  potenciacao,
};
