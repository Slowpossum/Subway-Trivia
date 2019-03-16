var coolDude = new Character(36, 43, loadedImages["./assets/images/coolDudeIdle.png"], 400, 226, 6);
var punk = new Character(25, 57, loadedImages["./assets/images/punkIdle.png"], 855, 156, 10);

function Character(width, height, image, x, y, frames) {
    this.image = image;
    this.width = width;
    this.frames = frames
    this.currFrame = 0;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx.drawImage(this.image, this.width * this.currFrame, 0,
            this.width, this.height,
            this.x, this.y + yPos,
            this.width * triviaGame.scale, this.height * triviaGame.scale);

        if (triviaGame.frameCount % 10 === 0) {
            if (this.currFrame < this.frames - 1) {
                
                this.currFrame++;
            } else {
                this.currFrame = 0;
            }
        }
    }
}

function updateCharacters() {
    punk.update();
    coolDude.update();
}

