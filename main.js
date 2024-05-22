// const todoInput = document.querySelector(".todo-input");
// const todoBtn = document.querySelector(".todo-btn");
// const todoList = document.querySelector(".todo-list");
// const todoForm = document.querySelector("form");
// const texts = document.getElementById('texts')
// const todoContainer = document.querySelector(".todo-container")


// todoBtn.addEventListener("click", addTodo);

// function addTodo(event) {
//     event.preventDefault();

//     texts.innerHTML=todoInput.value
    
  

//     const todoCheck = document.createElement("button")
//     todoCheck.classList.add("todo-check")

//     newDiv.appendChild(todoCheck)

//     // create trash

//     const todoTrash = document.createElement("button")
//     todoTrash.classList.add("todo-trash")

//     newDiv.appendChild(todoTrash)

//     // trash

//     todoTrash.addEventListener("click", trashEvent)

//     function trashEvent(event) {
//         event.preventDefault();
        
//         todoDiv.remove();
//     }

//     // check

//     todoCheck.addEventListener("click", checkEvent)

//     function checkEvent(event) {
//         event.preventDefault(); 

//         todoDiv.classList.toggle("completed");
//     }

//     todoInput.value = "";
// }




const myInput = document.querySelector("#myInput");
const myBtn = document.querySelector("#sendBtn");
const myAccept = document.querySelector(".acceptBox");
const myForm = document.querySelector("#myForm");


document.addEventListener('DOMContentLoaded', (event) => {
    const savedName = localStorage.getItem('name');
    
    if (savedName) {
        myAccept.textContent = savedName;
    }

    function saveName() {
        const currentName = myInput.value;
        myAccept.textContent = currentName;
        localStorage.setItem('name', currentName);
    }

    myInput.addEventListener('blur', saveName);
    myInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            saveName();
            myInput.blur();
        }
    });

    myInput.value = "";
});