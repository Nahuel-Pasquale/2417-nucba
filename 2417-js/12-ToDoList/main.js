// 1- definir las variables.
const input = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksList = document.querySelector('.tasks-list');
const deleteBtn = document.querySelector('.deleteAll-btn');

// 2- traer elementos del LS si existen
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// 3- grabar en LS
const saveLocalStorage = (taskList) => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}

/*
[{
  id: number,
  name: 'string',
},
{
  id: number,
  name: 'string',
},
{
  id: number,
  name: 'string',
}]
*/

// 4- crear el elemento a renderizar 
const createTask = task => 
`
  <li>${task.name}
    <img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id=${task.taskId}>
  </li>
`;

// 5- renderizar la o las tareas
const renderTaskList = todoList => {
  tasksList.innerHTML = todoList.map(task => createTask(task)).join('');
  console.log(tasksList.innerHTML);
}

// 6- verificar si el boton delete all se muestra o no
const hideDeleteAll = tasksList => {
  if(!tasksList.length){
    deleteBtn.classList.add('hidden');
    return
  }
  deleteBtn.classList.remove('hidden');
}

// 7- formulario para agregar tareas
const addTask = e => {
  e.preventDefault();
  const taskName = input.value.trim();

  if(!taskName.length){
    alert('Por favor, ingrese una tarea');
    return
  } else if (tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase())){
    alert('Ya existe una tarea con ese nombre')
    return;
  }

  tasks = [...tasks, { name: taskName, taskId: tasks.length + 1 }];
  input.value = '';

  renderTaskList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
}

const removeTask = e => {
  // si hago click en otro lugar que no sea la img del tachito no hace nada, si contiene la imagen del tachito, borra
  if(!e.target.classList.contains('delete-btn')) return; 

  const filterId = Number(e.target.dataset.id);
  console.log(filterId);
  // quiero borrar un elemento de tasklist
  tasks = tasks.filter(task => task.taskId !== filterId);
  renderTaskList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
}

// 8- funcionamiento boton remover todas
const removeAll = () => {
  tasks = [];
  renderTaskList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
}

// 9- funcion para inicializar

const init = () => {
  renderTaskList(tasks);
  addForm.addEventListener('submit', addTask);
  tasksList.addEventListener('click', removeTask);
  deleteBtn.addEventListener('click', removeAll);
  hideDeleteAll(tasks);
}

init();