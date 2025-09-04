const taskModel = require("../models/taskModel");
// GET /tarefas - Listar todas as tarefas
const getTarefas = (req, res) => {
  const tasks = taskModel.getTodasTarefas();
  res.json(tarefas);
};
// GET /tarefas/:id - Obter uma tarefa específica
const getTarefasId = (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = taskModel.getTarefaId(id);
  if (!tarefa) {
    res.status(404).json({ erro: "Tarefa não encontrada" });
  }
  res.json(tarefas);
};
// GET /tasks - Listar as tarefas Feitas
const getTarefasFeitas = (req, res) => {
  const tasks = taskModel.getFeitas();
  res.json(tarefas);
};
const paginaInicial = (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
};
// POST /tasks - Criar uma nova tarefa
const criarTarefa = (req, res) => {
  const nova = taskModel.criarTarefa(req.body);
  res.status(201).json(nova);
};
module.exports = {
  getTarefas,
  getTarefasId,
  getTarefasFeitas,
  criarTarefa,
};
