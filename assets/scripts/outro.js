var outroOpacity = 0;

function outro() {
    ctx.globalAlpha = outroOpacity;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, triviaGame.canvas.width, triviaGame.canvas.height);
    ctx.globalAlpha = 1;

    if (outroOpacity <= 1) {
        outroOpacity += 0.005;
    }
}