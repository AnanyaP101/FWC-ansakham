let size = 200;
let colors = ["red", "green", "blue"];
let color = 0;

$("#balloon").click(function() {
    size += 10;

    if (size > 420)
        size = 200;

    color++;

    if (color > 2)
        color = 0;

    $(this).css({
        width: size,
        height: size,
        backgroundColor: colors[color]
    });
});

$("#balloon").mouseleave(function() {
    if (size > 200)
        size -= 5;

    color--;

    if (color < 0)
        color = 2;

    $(this).css({
        width: size,
        height: size,
        backgroundColor: colors[color]
    });
});