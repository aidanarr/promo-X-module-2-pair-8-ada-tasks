'use strict';

const tasksUl = document.querySelector('.js-taskList');
const filterBtn = document.querySelector('.js-btn-filter');
const filterInput = document.querySelector('.js-text-task-filter');
// const GITHUB_USER = '<aidanarr>';
// const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const SERVER_URL = `https://dev.adalab.es/api/todo`;

let tasks = [];

fetch(SERVER_URL)
.then((response)=> response.json())
.then((data)=>{
  tasks = data.results;
  console.log(tasks);
  renderTaskArray(tasks);
  
});





//Tachado

function completeToggle(event){
  const targetId = parseInt(event.target.id);
  const taskClicked = tasks.findIndex((task) => task.id === targetId);
  tasks[taskClicked].completed = !tasks[taskClicked].completed;

}

const handleCheckbox = (event) =>{
  completeToggle(event);
  tasksUl.innerHTML = '';
  renderTaskArray();
  console.log(tasks);
}

// Tachado escuchando a la ul de html

// const handleCheckboxes = (event) => {
//   const clickedCheckboxId = event.target.id;
//   const taskIndex = findIndex((task) => task.id === clickedCheckboxId);
//   tasks[taskIndex].complete = !tasks[taskIndex].complete
// }

// tasksUl.addEventListener('click', handleCheckboxes);


//filtrar

function filter(){
  const valueInput = filterInput.value;
  tasksUl.innerHTML = '';
  const filteredTasks = tasks.filter((task) => task.name.toLowerCase().includes(valueInput.toLowerCase()));
  
  for (const task of filteredTasks){
    tasksUl.innerHTML += renderTask(task);
  }
}


const handleFilter = (event)=>{
  event.preventDefault();
  filter(event);
}

// Tareas totales

// let taskLeftMessage = '';
// function tasksLeft(array){
//   const completedTrue = array.filter((array) => tasks.completed = true);
//   console.log(completedTrue);
//   taskLeftMessage = ``;
// }


//Render

function renderTask(task){
  let taskLi = '';
  if (task.completed === true ){
    taskLi = `<li class="tachado"><input class="js_checkbox" type="checkbox" value="${task.completed}" id="${task.id}" checked> ${task.name}</li>`;
  }else{
    taskLi = `<li><input class="js_checkbox" type="checkbox" id="${task.id}" value="${task.completed}"> ${task.name}</li>`;
  }
     return taskLi;
     
  }

  const renderTaskArray = () =>{
    tasksUl.innerHTML = '';
    for (const task of tasks){
      tasksUl.innerHTML += renderTask(task);
    }
    const checkboxes = document.querySelectorAll(".js_checkbox");
    for(const box of checkboxes){
      box.addEventListener('click', handleCheckbox);
    }
    filterBtn.addEventListener('click', handleFilter);
}










