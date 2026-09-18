let list = document.getElementById("ft_list");

function newTodo() {
    let text = prompt("New TO DO:");

    if (text == null || text.trim() == "") {
        return;
    }

    let todo = document.createElement("div");
    todo.textContent = text;

    todo.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            todo.remove();
            save();
        }
    };

    list.prepend(todo);
    save();
}

function save() {
    let todos = [];

    for (let todo of list.children) {
        todos.push(todo.textContent);
    }

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function load() {
    let cookie = document.cookie;

    if (cookie.includes("todos=")) {
        let data = cookie.split("todos=")[1].split(";")[0];
        let todos = JSON.parse(decodeURIComponent(data));

        for (let text of todos) {
            let todo = document.createElement("div");
            todo.textContent = text;

            todo.onclick = function() {
                if (confirm("Do you want to remove this TO DO?")) {
                    todo.remove();
                    save();
                }
            };

            list.appendChild(todo);
        }
    }
}

load();