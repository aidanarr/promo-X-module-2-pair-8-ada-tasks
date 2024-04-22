'use strict';

const tasksUl = document.querySelector('.js-taskList');
const filterBtn = document.querySelector('.js-btn-filter');
const filterInput = document.querySelector('.js-text-task-filter');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];


//1. Pintar los li con los datos del array tasks --> renderTask por cada task del array --> si task.completed===true li class tachado


let taskLi = '';

function renderTask(task){
  if (task.completed === true ){
    taskLi = `<li class="tachado"><input class="js_checkbox" type="checkbox" value="${task.completed}" checked> ${task.name}</li>`;
  }else{
    taskLi = `<li><input class="js_checkbox" type="checkbox" value="${task.completed}"> ${task.name}</li>`;
  }
     return taskLi;
     
  }
  console.log(taskLi);
  

const taskArray = () =>{
    for (const task of tasks){
      tasksUl.innerHTML += renderTask(task);
    }
}

taskArray();


//2. Escuchar el botón. si el valor de completed es true --> ponerlo en false, quitar la clase tachado --> modificar el array original

const allLi = document.querySelectorAll('li');
const checkboxes = document.querySelectorAll(".js_checkbox");

let checkboxesArray = []; //el querySelectorAll devuelve un OBJETO (Nodelist) con comportamiento de array pero hay que convertirlo en array para que te deje pillar el indexOf

for(const box of checkboxes){
  checkboxesArray.push(box);
}

console.log(checkboxesArray);


function completeToggle(event){
  const boxClicked = event.target;
  const liClicked = boxClicked.parentNode;
  const index = checkboxesArray.indexOf(boxClicked);
  
  if(boxClicked.value === 'true'){
      tasks[index].completed = false;
       boxClicked.value = false;
       liClicked.classList.remove('tachado');
       boxClicked.checked = false;
      }else{
        tasks[index].completed = true;
        boxClicked.value = true;
        liClicked.classList.add('tachado');
        boxClicked.checked = true;
      }

      console.log(tasks[index]);
}


const handleClick = (event) =>{
  completeToggle(event);
  
}

for (const box of checkboxes){
  box.addEventListener('click', handleClick);
}


console.log(allLi);

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