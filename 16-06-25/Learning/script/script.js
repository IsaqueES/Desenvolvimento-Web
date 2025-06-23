const obterSeries = async () => {
  const container = document.getElementById("resultdiv");
  const input = document.getElementById("cepi");
  const busca = input.value.trim();

  container.innerHTML = ""; // Limpa os resultados anteriores

  if (!busca) {
    container.innerHTML =
      "<p class='text-red-500'>Digite o nome de uma série.</p>";
    return;
  }

  const resposta = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${busca}`
  );

  if (resposta.data.length === 0) {
    container.innerHTML =
      "<p class='text-gray-600'>Nenhuma série encontrada.</p>";
    return;
  }

  resposta.data.forEach((item) => {
    const show = item.show;

    const card = document.createElement("div");
    card.className =
      "bg-white border border-gray-300 rounded-lg shadow overflow-hidden";

    card.innerHTML = `
        <img src="${
          show.image?.medium ||
          "https://via.placeholder.com/210x295?text=Sem+Imagem"
        }" 
             alt="${show.name}" 
             class="w-full h-72 object-cover"/>
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-2">${show.name}</h2>
          <p class="text-gray-600">Score: ${item.score.toFixed(2)}</p>
        </div>
      `;

    container.appendChild(card);
  });

  input.value = "";
};
