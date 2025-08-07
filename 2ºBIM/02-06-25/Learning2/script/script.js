let cores = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "gold",
  "silver",
];

function clicou(id) {
  let random = Math.floor(Math.random() * cores.length - 1);
  let botao = document.getElementById(id);
  botao.style.backgroundColor = cores[random];
  botao.innerHTML = cores[random];
  botao.style.color = "black";
}
