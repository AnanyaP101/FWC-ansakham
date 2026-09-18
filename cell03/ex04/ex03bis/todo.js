function save() {
    let todos = [];

    $("#ft_list div").each(function() {
        todos.push($(this).text());
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function addTodo(text) {
    let todo = $("<div>").text(text);

    todo.click(function() {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            save();
        }
    });

    $("#ft_list").prepend(todo);
}

$("#new").click(function() {
    let text = prompt("New TO DO:");

    if (text && text.trim() != "") {
        addTodo(text);
        save();
    }
});

function load() {
    if (document.cookie.includes("todos=")) {
        let data = document.cookie.split("todos=")[1].split(";")[0];
        let todos = JSON.parse(decodeURIComponent(data));

        todos.forEach(function(text) {
            addTodo(text);
        });
    }
}

load();