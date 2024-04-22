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

// console.log(allLi);

// function strikeLi(){
//     for (const chore of tasks){
        
//         if(chore.completed === true){
            
//             const taskIndex = tasks.indexOf(chore);
//             // console.log(`Esta tarea está completa` + tasks.indexOf(chore));

//             const doneLi = allLi[taskIndex];

//             // console.log(doneLi);
            
//             doneLi.classList.add('tachado');
//         }
        
//     }
// }

const checkbox = document.querySelectorAll(".js_checkbox");

console.log(checkbox);

function strikeLi(array){
  // for (const item of checkbox) {
  //   if (item.value === "true") {
  //     item.checked = true;

  //     // const taskIndex = checkbox.indexOf(item);
  //     // console.log(taskIndex);
  //     // const doneLi = allLi[taskIndex];
  //     // doneLi.classList.add("tachado");
  //   }
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === "true") {
      array[i].checked = true;
      allLi[i].classList.add("tachado");
    } else {
      allLi[i].classList.remove("tachado");
    }
    console.log(array[i].value);
  }

}



// strikeLi(checkbox);


