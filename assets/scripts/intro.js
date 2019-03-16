var opacity = 0;
var loops = 0;
var timerID;
var timerSet = false;

function intro() {
    if (triviaGame.menu === true && triviaGame.fade === "none") {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, triviaGame.canvas.width, triviaGame.canvas.height);
        ctx.font = "40px 'Visitor'";
        ctx.fillStyle = "white";
        ctx.fillText("Press any key to begin.", 300, triviaGame.canvas.height / 2);
    } else if (triviaGame.fade === "in") {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, triviaGame.canvas.width, triviaGame.canvas.height);
        ctx.font = "40px 'Visitor'";
        ctx.fillStyle = "white";
        ctx.globalAlpha = opacity;
        ctx.fillText("The Subway", 300, triviaGame.canvas.height / 2);
        ctx.globalAlpha = 1;

        if (opacity <= 1) {
            opacity += 0.005;
        } else {
            if(timerSet === false) {
                timerID = setTimeout(timerFunction, 3000);
                timerSet = true;
            }
        }
    }else if (triviaGame.fade === "out") {
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, triviaGame.canvas.width, triviaGame.canvas.height);
        ctx.font = "40px 'Visitor'";
        ctx.fillStyle = "white";
        ctx.fillText("The Subway", 300, triviaGame.canvas.height / 2);
        ctx.globalAlpha = 1;

        if (opacity > 0.05) {
            opacity -= 0.005;
        } else {
            triviaGame.fade = "done";
        }
    }
}

$(document).on("click", function () {
    if (triviaGame.menu === true) {
        tracksSound.play();
        triviaGame.fade = "in";
    }
});

function timerFunction() {
    triviaGame.fade = "out";
    triviaGame.menu = false;
    clearTimeout(timerID);
    timerSet = false;
}