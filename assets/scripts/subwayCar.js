var xPos = 0;
var yPos = 0;

function updateBackground() {
    if (triviaGame.frameCount === 50 && yPos !== 3) {
        yPos = 3;
    } else if (yPos === 3 && triviaGame.frameCount >= 7) {
        yPos = 0;
    }

    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 500);
    ctx.drawImage(loadedImages["./assets/images/subwayCar.png"], xPos, yPos, 200 * triviaGame.scale, 100 * triviaGame.scale);
}