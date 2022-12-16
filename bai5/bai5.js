function ToDoApp(items) {
    this.items = items;
}

// let todoapp_arr = []
// todoapp_arr[0] = new ToDoApp("Come pick up Her on dates", )

// localStorage.setItem("key",JSON.stringify(todoapp_arr))

function renderToDoApp() {
    let data = "";
    let result = document.getElementById("table_data")
    let todoapp_arr = JSON.parse(localStorage.getItem("key"))
    for (let i = 0; i < todoapp_arr.length; i++) {
        data += `
             <tr>
                <td>${i + 1}</td>
                <td class = "changeItemInput">${todoapp_arr[i].items}</td>
                <td><button onclick="update_btn(${i})">UPDATE</button><button onclick="delete_btn(${i})">DELETE</button></td>
            </tr>
        `
    }
    result.innerHTML = data
}
renderToDoApp()

//khi an vao save thi them items
function save_btn() {
    let input = document.getElementById("input");
    let newValue = new ToDoApp(input.value, "In Progress")
    let todoapp_arr = JSON.parse(localStorage.getItem("key"))
    todoapp_arr.push(newValue);
    input.value = ""

    localStorage.setItem("key", JSON.stringify(todoapp_arr))
    renderToDoApp()
}

//nut delete
function delete_btn(index) {
    let todoapp_arr = JSON.parse(localStorage.getItem("key"))
    todoapp_arr.splice(index, 1);
    localStorage.setItem("key", JSON.stringify(todoapp_arr))
    renderToDoApp()
}

//nút Enter
let input = document.getElementById("input")
input.addEventListener("keypress", function (keyValue) {
    if (keyValue.key == "Enter") {
        let newValue = new ToDoApp(input.value, "In Progress")
        let todoapp_arr = JSON.parse(localStorage.getItem("key"))
        todoapp_arr.push(newValue);
        input.value = ""

        localStorage.setItem("key", JSON.stringify(todoapp_arr))
        renderToDoApp()
    }
})

//nut update
function update_btn(index) {
    let todoapp_arr = JSON.parse(localStorage.getItem("key"))
    let edit = document.getElementsByClassName("changeItemInput")[index]
    edit.innerHTML = `<input onchange="updateValue(${index})" type ="text" value = "${todoapp_arr[index].items}">`
}
function updateValue(index) {
    let todoapp_arr = JSON.parse(localStorage.getItem("key"))
    let update = document.getElementsByClassName("changeItemInput")[index]
    let newValue = update.childNodes[0].value//đi bộ ttrong DOM
    todoapp_arr[index].items = newValue
    localStorage.setItem("key", JSON.stringify(todoapp_arr))

    update.innerHTML = newValue
}