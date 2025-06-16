const isaqJson = {
  cep: "12320580",
  address_type: "Rua",
  address_name: "Santa Isabel",
  address: "Rua Santa Isabel",
  state: "SP",
  district: "Jardim Didinha",
  lat: "-23.3157431",
  lng: "-45.9799561",
  city: "Jacareí",
  city_ibge: "3524402",
  ddd: "12",
};

const obterCep = async () => {
  var resultdiv = document.getElementById("resultdiv");
  var input = document.getElementById("cepi");
  var cep = input.value;
  input.value = "";
  const resultado = await axios.get(
    `https://cep.awesomeapi.com.br/json/${cep}`
  );
  resultdiv.innerText = `Endereço = ${resultado.data.address}\nDDD = ${resultado.data.ddd}\nCidade = ${resultado.data.city}\nEstado = ${resultado.data.state}`;
};
