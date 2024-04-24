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
  taskArray();
  const checkboxes = document.querySelectorAll(".js_checkbox");
  // let checkboxesArray = [];

  // for(const box of checkboxes){
  //   checkboxesArray.push(box);
  // }
  
  const handleCheckbox = (event) =>{
    completeToggle(event);
  }

  for(const box of checkboxes){
    box.addEventListener('click', handleCheckbox);
  }
  
});


function renderTask(task){
  let taskLi = '';
  if (task.completed === true ){
    taskLi = `<li class="tachado"><input class="js_checkbox" type="checkbox" value="${task.completed}" id="${task.id}" checked> ${task.name}</li>`;
  }else{
    taskLi = `<li><input class="js_checkbox" type="checkbox" id="${task.id}" value="${task.completed}"> ${task.name}</li>`;
  }
     return taskLi;
     
  }

  const taskArray = () =>{
    tasksUl.innerHTML = "";
    for (const task of tasks){
      tasksUl.innerHTML += renderTask(task);
    }
}

// punto 2
// let taskLeftMessage = '';
// function tasksLeft(array){
//   const completedTrue = array.filter((array) => tasks.completed = true);
//   console.log(completedTrue);
//   taskLeftMessage = ``;
// }


//Pasos
//1. Hacer click en el checkbox y coger el id con event.target.id
//2. findIndex buscar la posición en el array tasks
//3. con la posición del array le cambio la propiedad de completed a ese array array[posición].completed = nuevo valor

function completeToggle(event){
  // tasksUl.innerHTML = "";
  const targetId = parseInt(event.target.id);

  const taskClicked = tasks.findIndex((task) => task.id === targetId);
  
    // if (tasks[taskClicked].completed === true) {
    //   tasks[taskClicked].completed = false;

    // } else {
    //   tasks[taskClicked].completed = true;

    // }
   tasks[taskClicked].completed = !tasks[taskClicked].completed;
  //  taskArray(tasks);
    
    console.log(renderTask(tasks[taskClicked]));

  // const boxClicked = event.target;
  // const liClicked = boxClicked.parentNode;
  // const index = arrayBtns.indexOf(boxClicked);
  
  // if(boxClicked.value === 'true'){
  //     arrayData[index].completed = false;
  //      boxClicked.value = false;
  //      liClicked.classList.remove('tachado');
  //      boxClicked.checked = false;
  //     }else{
  //       arrayData[index].completed = true;
  //       boxClicked.value = true;
  //       liClicked.classList.add('tachado');
  //       boxClicked.checked = true;
  //     }

  //     console.log(arrayData[index]);
}

taskArray(tasks);











//filtrar

function filter(){
  const valueInput = filterInput.value;
  tasksUl.innerHTML = '';

  for (const task of tasks){
    if(task.name.toLocaleLowerCase().includes(valueInput.toLocaleLowerCase())){
      tasksUl.innerHTML += renderTask(task);
    }
  }
}


const handleFilter = (event)=>{
  event.preventDefault();
  filter(event);
}

filterBtn.addEventListener('click', handleFilter);




