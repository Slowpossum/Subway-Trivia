function gameStart() {
    triviaGame.start();
}

function updateGameArea() {
    triviaGame.updateFrameCount();
    triviaGame.clear();
    updateBackground();
    updateCharacters();
}