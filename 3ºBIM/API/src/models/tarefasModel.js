let tarefas = [
  { id: 2, titulo: 'Estudar', feita: 0 },
];

// Funções para manipular as tarefas
const getTodasTarefas = () => tarefas;

const getTarefaId = (id) => tarefas.find(task => task.id === id);

const getFeitas = () => {
  return tarefa.find(item => item.feito === 1)
};

const criarTarefa = (taskData) => {
  const newTask = {
    id: tarefas.length ? 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    titulo: taskData.titulo,
    completed: taskData.completed || false
  };
  tasks.push(newTask);
  return newTask;
};

module.exports = {
  getTodasTarefas,
  getTarefaId,
  getFeitas,
  criarTarefa
};
