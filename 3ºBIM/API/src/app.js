const express = require("express");
const tarefasRoutes = require("./routes/tarefasRoutes");
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const path = require("path");
app.use(express.static(path.join(__dirname, "view")));

//? Configurando middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tarefas", tarefasRoutes);

module.exports = app;
