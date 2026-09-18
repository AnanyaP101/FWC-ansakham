let balloon = document.getElementById("balloon");

let size = 200;
let colors = ["red", "green", "blue"];
let color = 0;

balloon.onclick = function() {

    size = size + 10;

    if (size > 420) {
        size = 200;
    }

    color = color + 1;

    if (color > 2) {
        color = 0;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
};