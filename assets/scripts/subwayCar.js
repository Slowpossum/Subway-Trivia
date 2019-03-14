var xPos = 0;
var yPos = 0;
var lightLoop = 0;
var lightX = 1020;

function updateBackground() {
    if (triviaGame.frameCount === 50 && yPos !== 3) {
        yPos = 3;
    } else if (yPos === 3 && triviaGame.frameCount >= 7) {
        yPos = 0;
    }

    if (triviaGame.frameCount === 50 && lightLoop !== 4) {
        lightLoop++;
    }

    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 500);

    if (lightLoop === 4) {
        updateLight();
    }

    ctx.drawImage(loadedImages["./assets/images/subwayCar.png"], xPos, yPos, 200 * triviaGame.scale, 100 * triviaGame.scale);
}

function updateLight() {
    ctx.drawImage(loadedImages["./assets/images/light.png"], lightX, 120, 5 * triviaGame.scale, 59 * triviaGame.scale);
    lightX -= 25;

    if (lightX < -10) {
        lightLoop = 0;
        lightX = 1020;
    }
}