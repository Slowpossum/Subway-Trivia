function gameStart() {
    triviaGame.start();

    if (triviaGame.mute === true) {
        clickSound.volume = 0;
        tracksSound.volume = 0;
    }
}

function updateGameArea() {
    triviaGame.clear();

    if (triviaGame.menu === false) {
        triviaGame.updateFrameCount();
        updateBackground();
        updateCharacters();
        talk();
    }

    if (triviaGame.fade !== "done") {
        intro();
    }

    if (speechBubble.scriptComplete === true) {
        outro();
    }
}