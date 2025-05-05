/*
Faça um programa com funções e Arrays que implementam uma agenda
que armazena eventos. Utilizar estruturas de repetição.
Siga os requisitos:
* Inserção;
* Leitura;
* Edição.
*/

let agenda = [];
let datas = [];
let descricao = [];
let local = [];
let opcao = 0;

//ELEMENTOS
const botaoInserir = document.getElementById("botao-inserir");
const botaoListar = document.getElementById("botao-listar");
const botaoEditar = document.getElementById("botao-editar");
const resultado = document.getElementById("resultado-lista");
//LISTENERS
botaoInserir.addEventListener("click", inserirEvento);
botaoListar.addEventListener("click", listarEventos);
botaoEditar.addEventListener("click", editarEvento);

//INSERIR
function inserirEvento() {
  let evento = prompt("Digite o evento que deseja inserir:");
  let data = prompt("Digite a data do evento:");
  let desc = prompt("Digite a descrição do evento:");
  let locale = prompt("Digite o local do evento:");
  agenda.push(evento);
  datas.push(data);
  descricao.push(desc);
  local.push(locale);
}
//LISTAR
function listarEventos() {
  let html = "";
  let c = 0;
  while (c < agenda.length) {
    html += `
    <div class="evento">
        <h2>Indice : ${c}</h2>
        <p>Evento : ${agenda[c]}</p>
        <p>Data : ${datas[c]}</p>
        <p>Desc : ${descricao[c]}</p>
        <p>Local : ${local[c]}</p>
        <hr/>
    </div>`;
    c++;
  }
  resultado.innerHTML = html;
}
//EDITAR
function editarEvento() {
  var indice = prompt("Digite o indice do evento que deseja editar:");
  if (Number.isInteger(Number(indice))) {
    alert("FOI!");
    agenda.splice(indice, 1);
    datas.splice(indice, 1);
    descricao.splice(indice, 1);
    local.splice(indice, 1);
  }

  let evento = prompt("Digite o evento que deseja inserir:");
  let data = prompt("Digite a data do evento:");
  let desc = prompt("Digite a descrição do evento:");
  let locale = prompt("Digite o local do evento:");
  agenda.push(evento);
  datas.push(data);
  descricao.push(desc);
  local.push(locale);
}
