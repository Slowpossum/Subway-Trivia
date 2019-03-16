var speechBubble = {
    line: "This is a test line, lets see how this works with a longer line. and even more, lets really pack some words into this thing",
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
    speechTimer: 0,
    scriptPause: false,
    scriptComplete: false,
    scriptAdvance: false,
    bubbleWidth: 69,
    bubbleHeight: 11
}

function talk() {
    if (!speechBubble.scriptComplete) {
        putBubble();
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

$(document).keyup(function () {
    if (speechBubble.scriptPause) {
        speechBubble.currentLines = ["", "", ""];
        speechBubble.currLine = 0;
        speechBubble.scriptPause = false;
    } else if (speechBubble.scriptAdvance === true) {
        speechBubble.currentLines = ["", "", ""];
        speechBubble.currLine = 0;
        speechBubble.scriptPause = false;
        speechBubble.letterPos = 0;
        speechBubble.scriptPos++;
    }
});