const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Requisição POST para /tasks
const tarefa = {
  titulo: "Estudar Express",
  feito: 0,
};

// Definindo as rotas para as operações CRUD
router.get("/tarefas", tarefaController.getTarefas);
router.get("/tarefas/:id", tarefaController.getTarefasId);
router.get("tarefasFeitas/", tarefaController.getTarefasFeitas);
router.post("tarefas/", tarefaController.criarTarefa);
router.get("/", tarefaController.paginaInicial);
module.exports = router;
