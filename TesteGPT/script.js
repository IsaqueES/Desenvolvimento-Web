const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const query = input.value.trim();
  if (query) {
    alert(`Você pesquisou: ${query}`);
  } else {
    alert("Digite algo para pesquisar!");
  }
});
