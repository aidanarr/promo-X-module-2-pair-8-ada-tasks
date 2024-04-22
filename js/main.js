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
    return tasksUl.innerHTML += `<li><input class="js_checkbox" type="checkbox" value="${task.completed}"> ${task.name}</li>`;
  }

  

const taskArray = () =>{
    for (const chore of tasks){
        renderTask(chore);
    }
}

taskArray();


const allLi = document.querySelectorAll('li');


const checkboxes = document.querySelectorAll(".js_checkbox");


function strikeLi(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === "true") {
      array[i].checked = true;
      allLi[i].classList.add("tachado");
    } else {
      allLi[i].classList.remove("tachado");
      array[i].checked = false;
    }
    console.log(array[i].value);
  }

}

strikeLi(checkboxes);


function strikeToggle(event){
  const boxClicked = event.target;
  const liClicked = boxClicked.parentNode;

  if(boxClicked.value === 'true'){
   boxClicked.value = false;
   liClicked.classList.remove('tachado');
   boxClicked.checked = false;
  }else{
    boxClicked.value = true;
    liClicked.classList.add('tachado');
    boxClicked.checked = true;
  }
}



const handleClick = (event) =>{
  strikeToggle(event);
  
  
}

for (const box of checkboxes){
  box.addEventListener('click', handleClick);
}


//Falta modificar el array tasks. Hay que hacer todo esto de otra forma


