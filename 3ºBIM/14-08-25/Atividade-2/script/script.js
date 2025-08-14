const express = require("express");
const app = express();
const porta = 3000;
const path = require("path");
const _ = require("lodash");

app.use(express.json());


app.get("/",async(req,res)=>{
    res.sendFile(path.join(__dirname, "../src/index.html"));

})
app.get("/result/:pesquisa", async (req, res) => {
    const _ = require("lodash"); // se ainda não tiver importado

    const pesquisa = req.params.pesquisa.split(",");
    console.log(`TESTE :${pesquisa}`);
    try {
      const livros = await fetch(
        `https://openlibrary.org/search.json?q=${pesquisa}`
      );
      const data = await livros.json();

      // Ordena os livros pelo título em ordem alfabética
      const livrosOrdenados = _.sortBy(data.docs, (livro) =>
        (livro.title || "").toLowerCase()
      );

      let html = "";
      livrosOrdenados.forEach((livro) => {
        const titulo = livro.title || "Sem título";
        const autor = livro.author_name
          ? livro.author_name[0]
          : "Autor desconhecido";
        const ano = livro.first_publish_year || "Ano desconhecido";
        const img = livro.cover_i;

        html += `
            <div style="margin-bottom:20px; padding:15px; border:1px solid #ccc; border-radius:10px; box-shadow:2px 2px 10px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s; max-width:400px;">
                <h2 style="font-size:1.5em; margin-bottom:10px;">${titulo}</h2>
                <p style="margin:5px 0; color:#333;"><span style="font-weight:bold;">Autor:</span> ${autor}</p>
                <p style="margin:5px 0; color:#333;"><span style="font-weight:bold;">Ano:</span> ${ano}</p>
                ${
                  img
                    ? `<img src="https://covers.openlibrary.org/b/id/${img}-L.jpg" style="margin-top:10px; width:100%; max-width:200px; border-radius:8px; box-shadow:1px 1px 5px rgba(0,0,0,0.1);">`
                    : ""
                }
            </div>


        `;
      });

      res.send("<a href='/'>Voltar</a>" + html);
    } catch (err) {
      console.error(err);
      res.send("Erro ao buscar livros.");
    }
});

app.listen(porta, async () => {
  try {
    console.log(`Servidor rodando em http://localhost:${porta}`);
  } catch (error) {
    console.error(`ERRO ${error}`);
  }
});
