var triviaGame = {
    canvas: document.createElement("canvas"),
    frameCount: 0,
    scale: 5,
    start: function () {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.canvas.classList.add("canvasFormatting");
        this.canvas.id = "gameCanvas";
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    updateFrameCount: function () {
        if ((this.frameCount + 1) <= 50) {
            this.frameCount++;
        } else {
            this.frameCount = 1;
        }
    },
    resetObj: function () {
        objects = {};
    }
};

var ctx = triviaGame.canvas.getContext("2d");