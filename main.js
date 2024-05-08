const inputBox = document.getElementById("input__box")
const listContenir = document.getElementById("list__contenir")

function addTask() {
    if (inputBox === '') {
        alert("You must write something")
    }else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContenir.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputBox.value = ""
    saveData()
}

listContenir.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContenir.innerHTML)
}

function showTask() {
    listContenir.innerHTML = localStorage.getItem("data")
}
showTask()