const input = document.querySelector('.input-tarefa');
const addButton = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const liMaker = () => {
  const li = document.createElement('li');
  return li;
};

const addTarefa = (task) => {
  const li = liMaker();
  li.innerText = task; 
  tarefas.appendChild(li);
  deleteButton(li);
  saveTasks();
};

const clearInput = () => {
  input.value = '';
  input.focus();
};

const saveTasks = () => {
  const liList = tarefas.querySelectorAll('li');
  const tasksArray = [];
  liList.forEach((li) => tasksArray.push(li.innerText.replace('Apagar', '').trim()));
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

const getTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  savedTasks.forEach((task) => addTarefa(task))
};

const deleteButton = (li) => {
  li.innerText += ' ';
  const button = document.createElement('button');
  button.innerText = 'Apagar';
  button.setAttribute('class', 'apagar')
  button.setAttribute('title', 'Apagar esta tarefa'); // montra info sob mouse over
  li.appendChild(button);
}

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!input.value) return console.error('empty');
    addTarefa(input.value);
    clearInput();
  }
});

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('apagar')) {
    target.parentNode.remove();
    saveTasks();
  }
});

getTasks();


