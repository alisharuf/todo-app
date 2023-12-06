/* collecting id's of input search bar and list of iteam */
const inputText = document.getElementById('input-txt');
const taskList = document.getElementById('task');

/* function to collect peding task from user from input and adding it to the list*/
function addTask() {
    if (inputText.value === '') {
        alert('atleast give some input to display on TODO list');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    saveData();/* function call to save todo data in internal storage of browser*/
}

/* Function to add, make it checked(onclicking) and to delete that task from todo list*/
taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/* function definition to save todo data in internal storage of browser so that if we 
   refresh the browser it'll be there in the page , it's not going to be vanish*/
function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}
function showList() {
    taskList.innerHTML = localStorage.getItem("data");
}
showList();
