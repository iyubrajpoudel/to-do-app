
const taskInput = document.getElementById("taskInput");
console.log(taskInput);

// const tasksList = document.querySelector(".tasks-list");
const tasksList = document.querySelectorAll(".tasks-list")[0]
// console.log(tasksList);

// const addButton = document.getElementById("addBtn");
const addButton = document.querySelector("#addBtn");
console.log(addButton);

// const cross = document.querySelector("#cross");

// const listElement = `<li>${taskInput.value}</li>`

const addTask = () =>{
    // console.log(taskInput.value);
    if(taskInput.value === ""){
        alert("Enter something before adding.")
        taskInput.focus();
    }
    else{
        let listItem = document.createElement("li");
        // let task = document.createElement("p");
        // let cross = document.createElement("span");
        // task.innerHTML = taskInput.value;
        // cross.innerHTML= "X"
        listItem.setAttribute("onclick", "toogleChecked(this)");
        listItem.innerHTML=`<p>${taskInput.value}</p><span id="cross" onclick="removeItem(this)">X</span>`
        tasksList.appendChild(listItem);
        taskInput.value="";
        taskInput.focus();
    }
}

addButton.addEventListener("click", (e)=>{
    addTask();
})



// handeling Enter keypress to add task
document.addEventListener("keypress", (e)=>{
    // console.log(e);
    if(e.key == "Enter"){
        addTask();
    }
})

function removeItem(element){
    // console.log("ok");
    // console.log(element);
    // console.log(element.parentNode);
    element.parentNode.remove();
}

// document.querySelectorAll(".tasks-list li").addEventListener("click", (e)=>{
//     console.log(ok);
// })


function toogleChecked(element){
    // console.log(element);
    // console.log(element.classList);
    element.classList.toggle('checked');
}

