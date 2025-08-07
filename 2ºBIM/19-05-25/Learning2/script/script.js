// //PROFESSOR
// class Animal {
//   constructor() {
//     this.nome = "";
//     this.idade = "";
//     this.cor = "";
//   }

//   nomear(nome) {
//     this.nome = nome;
//   }

//   atribuiIdade(idade) {
//     this.idade = idade;
//   }

//   apresentaNome() {
//     console.log(this.nome);
//   }
// }

// let animal1 = new Animal();
// animal1.nomear("Cachorro");
// animal1.atribuiIdade(5);
// animal1.cor = "preto";
// console.log(animal1);

// EU
class Animal {
  constructor() {
    this.nome = "";
    this.especie = "";
  }

  nomear(nome) {
    this.nome = nome;
  }

  atribuiespecie(especie) {
    this.especie = especie;
  }
}
AnimaisCadastradas = [];

let addanimal = document.getElementById("addanimal");
let animais = [];

document.getElementById("addanimal").addEventListener("click", () => {
  const name = document.getElementById("animalname").value;
  const especie = document.getElementById("animalage").value;
  document.getElementById("animalname").value = "";
  document.getElementById("animalage").value = "";
  if (name != "" || especie != "") {
    animal = {
      nome: name,
      especie: especie,
    };
    animais.push(animal);
  }

  let c = 0;
  let html = "";
  while (c < animais.length) {
    html += `
    <div class="animaladded bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
      <h2 class="font-semibold text-lg">Nome : ${animais[c].nome}</h2>
      <p class="text-gray-700">Especie : ${animais[c].especie}</p>
    </div>
    `;
    c++;
  }
  let result = document.getElementById("animaiscadastrados");
  result.innerHTML =
    `<h2 class="text-2xl font-bold text-indigo-600 mb-4">Animais Cadastrados</h2>` +
    html;
});
