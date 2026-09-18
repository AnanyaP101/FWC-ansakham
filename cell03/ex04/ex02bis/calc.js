$("#calculate").click(function() {
    let left = Number($("#left").val());
    let right = Number($("#right").val());
    let op = $("#operator").val();

    if (left < 0 || right < 0 ||
        !Number.isInteger(left) || !Number.isInteger(right)) {
        alert("Error :(");
        return;
    }

    if (right == 0 && (op == "/" || op == "%")) {
        alert("It's over 9000!");
        return;
    }

    let result;

    if (op == "+") result = left + right;
    else if (op == "-") result = left - right;
    else if (op == "*") result = left * right;
    else if (op == "/") result = left / right;
    else if (op == "%") result = left % right;

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);