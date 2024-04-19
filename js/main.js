'use strict';

const tasksUl = document.querySelector('.js-taskList');


const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];

function renderTask(task){
    return tasksUl.innerHTML += `<li>${task}</li>`;
    
  }

console.log
const taskArray = () =>{
    for (const chore of tasks){
        
        renderTask(chore.name);
    }
}

taskArray();


const allLi = document.querySelectorAll('li');

function strikeLi(){
    for (const chore of tasks){
        
        if(chore.completed === true){
            
            allLi.classList.add('tachado');
        };
        
    }
}

strikeLi();

// Recorre los li, cuando incluyan chore.comleted === true, li.classList.add('tachado')

// Recorre las tareas, si tiene true, 
