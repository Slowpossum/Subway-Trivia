var speechTimer;

var speechBubble = {
    line: "",
    currentLines: ["", "", ""],
    currLine: 0,
    letterPos: 0,
    lineLength: {
        width: 35,
        height: 2
    },
    location: {
        punk: {
            x: 550,
            y: 120
        },
        coolDude: {
            x: 450,
            y: 150
        }
    },
    tailPos: {
        punk: {
            dir: "Right",
            x: 820,
            y: 175
        },
        coolDude: {
            dir: "Left",
            x: 500,
            y: 205,
        }
    },
    scriptPos: 1,
    cursorLocation: 1,
    scriptPause: false,
    scriptComplete: false,
    scriptAdvance: false,
    bubbleWidth: 69,
    bubbleHeight: 11
}

function talk() {
    if (!speechBubble.scriptComplete) {
        if (script[speechBubble.scriptPos].type === "statement") {
            if (script[speechBubble.scriptPos].delaySet === false) {
                clearTimeout(speechBubble);
                speechTimer = setTimeout(function () {
                    script[speechBubble.scriptPos].timerComplete = true;
                }, script[speechBubble.scriptPos].delay);
                script[speechBubble.scriptPos].delaySet = true;
            } else {
                if (script[speechBubble.scriptPos].timerComplete === true) {
                    putBubble();
                }
            }
        } else if (script[speechBubble.scriptPos].type === "question") {
            if (script[speechBubble.scriptPos].delaySet === false) {
                clearTimeout(speechBubble);
                speechTimer = setTimeout(function () {
                    script[speechBubble.scriptPos].timerComplete = true;
                }, script[speechBubble.scriptPos].delay);
                script[speechBubble.scriptPos].delaySet = true;
            } else {
                if (script[speechBubble.scriptPos].timerComplete === true) {
                    putBubble();
                }
            }

            if (speechBubble.scriptAdvance === true) {
                askQuestion();
            }
        }
    }
}

function putBubble() {
    ctx.drawImage(loadedImages["./assets/images/speechBubble.png"],
        speechBubble.location[script[speechBubble.scriptPos].subject].x,
        speechBubble.location[script[speechBubble.scriptPos].subject].y,
        speechBubble.bubbleWidth * triviaGame.scale, speechBubble.bubbleHeight * triviaGame.scale);

    ctx.drawImage(loadedImages[`./assets/images/bubbleTail${speechBubble.tailPos[script[speechBubble.scriptPos].subject].dir}.png`],
        speechBubble.tailPos[script[speechBubble.scriptPos].subject].x,
        speechBubble.tailPos[script[speechBubble.scriptPos].subject].y,
        7 * triviaGame.scale, 4 * triviaGame.scale);

    putText();
}

function putText() {
    ctx.font = "20px 'Visitor'";

    if (!speechBubble.scriptPause) {
        if (speechBubble.letterPos < script[speechBubble.scriptPos].text.length) {
            speechBubble.currentLines[speechBubble.currLine] += script[speechBubble.scriptPos].text[speechBubble.letterPos];
            speechBubble.letterPos++;

            clickSound.play().catch(function () {
                clickSound.currentTime = 0;
            });

            if (script[speechBubble.scriptPos].text[speechBubble.letterPos] === " ") {
                var count;
                for (var i = speechBubble.letterPos + 1; script[speechBubble.scriptPos].text[i] !== " "; i++) {
                    count = i;
                    if (script[speechBubble.scriptPos].text[i] === undefined) {
                        break;
                    }
                }

                count = count + 1 - speechBubble.letterPos;

                if (speechBubble.currentLines[speechBubble.currLine].length + count > speechBubble.lineLength.width) {
                    speechBubble.currLine++;
                    speechBubble.letterPos++;

                    if (speechBubble.currLine > speechBubble.lineLength.height) {
                        speechBubble.scriptPause = true;
                        return;
                    }
                }
            }

            if (speechBubble.currentLines[speechBubble.currLine].length === speechBubble.lineLength.width) {
                speechBubble.currLine++;

                if (speechBubble.currLine > speechBubble.lineLength.height) {
                    speechBubble.scriptPause = true;
                    return;
                }
            }
        } else {
            speechBubble.scriptAdvance = true;
        }
    }

    for (var i = 0; i < speechBubble.currentLines.length; i++) {
        ctx.fillText(speechBubble.currentLines[i],
            speechBubble.location[script[speechBubble.scriptPos].subject].x + 15,
            speechBubble.location[script[speechBubble.scriptPos].subject].y + 15 + (15 * i));
    }
}

function askQuestion() {
    ctx.fillStyle = "white";
    ctx.fillRect(570, 205, 200, 30 * script[speechBubble.scriptPos].choices.amount);
    ctx.fillStyle = "black";

    for (var i = 0; i < script[speechBubble.scriptPos].choices.amount; i++) {
        ctx.fillText(script[speechBubble.scriptPos].choices[i + 1], 595, 225 + (25 * i));

        if (i === speechBubble.cursorLocation - 1) {
            ctx.drawImage(loadedImages["./assets/images/cursor.png"], 575, 212 + (25 * i), 3 * triviaGame.scale - 1, 3 * triviaGame.scale - 1);
        }
    }

}

$(document).keyup(function (e) {
    if (speechBubble.scriptPause) {
        speechBubble.currentLines = ["", "", ""];
        speechBubble.currLine = 0;
        speechBubble.scriptPause = false;
    } else if (speechBubble.scriptAdvance === true) {
        if (speechBubble.scriptPos !== script.length) {
            if (script[speechBubble.scriptPos].doAfter !== undefined && speechBubble.scriptAdvance === true && script[speechBubble.scriptPos].type === "statement") {
                if (script[speechBubble.scriptPos].functionRun === false) {
                    script[speechBubble.scriptPos].doAfter();
                    script[speechBubble.scriptPos].functionRun = true;
                }
            }

            if (script[speechBubble.scriptPos].type === "statement") {
                speechBubble.currentLines = ["", "", ""];
                speechBubble.currLine = 0;
                speechBubble.scriptPause = false;
                speechBubble.scriptAdvance = false;
                speechBubble.letterPos = 0;
                speechBubble.scriptPos++;
            }
        } else {
            speechBubble.scriptComplete = true;
        }
    }

    if (script[speechBubble.scriptPos].type === "question" && speechBubble.scriptAdvance === true) {
        if (e.key === "ArrowUp" && speechBubble.cursorLocation - 1 > 0) {
            speechBubble.cursorLocation--;
        } else if (e.key === "ArrowDown" && speechBubble.cursorLocation + 1 <= script[speechBubble.scriptPos].choices.amount) {
            speechBubble.cursorLocation++;
        } else if (e.key === "Enter") {
            script[speechBubble.scriptPos].answer = speechBubble.cursorLocation;
            script[speechBubble.scriptPos].doAfter();
            speechBubble.currentLines = ["", "", ""];
            speechBubble.currLine = 0;
            speechBubble.scriptPause = false;
            speechBubble.scriptAdvance = false;
            speechBubble.letterPos = 0;
            speechBubble.scriptPos++;
            speechBubble.cursorLocation = 1;
        }
    }
});