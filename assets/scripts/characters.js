var coolDude = new Character(36, 43, loadedImages["./assets/images/coolDude.png"], 400, 226);
var punk = new Character(15, 57, loadedImages["./assets/images/punk.png"], 910, 156);

function Character(width, height, image, x, y) {
    this.image = image;
    this.width = width;
    this.animation = "idle";
    this.animFrame = 0;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx.drawImage(this.image, this.x, this.y + yPos, this.width * triviaGame.scale, this.height * triviaGame.scale);
    }
}

function updateCharacters() {
    punk.update();
    coolDude.update();
}