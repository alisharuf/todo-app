const inputText = document.getElementById('input-txt');
const taskList = document.getElementById('task');

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
    saveData();
}
taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}
function showList() {
    taskList.innerHTML = localStorage.getItem("data");
}
showList();