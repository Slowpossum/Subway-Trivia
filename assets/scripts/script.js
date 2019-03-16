var script = {
    length: 7,
    1: {
        subject: "coolDude",
        type: "statement",
        delay: 4500,
        delaySet: false,
        timerComplete: false,
        text: `Hey, man. How's it going?`
    },
    2: {
        subject: "coolDude",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        functionRun: false,
        text: `Hey! Buddy! I'm talking to YOU.`,
        doAfter: function () {
            punk = new Character(25, 57, loadedImages["./assets/images/punkTurn.png"], 855, 156, 7);
            setTimeout(function () {
                punk = new Character(25, 57, loadedImages["./assets/images/punkTurnIdle.png"], 855, 156, 6);
            }, 1000);
        }
    },
    3: {
        subject: "punk",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        text: `Oh, sorry... What's up?`
    },
    4: {
        subject: "coolDude",
        type: "statement",
        delay: 1500,
        delaySet: false,
        timerComplete: false,
        text: `Same old, man. World's going up in flames, stock prices are plummeting, my car's acting up. Why else would I be on this godforsaken metal death-tube? The only reason the government makes these things is so that they know our routes of transportation. It's all a conspiracy, look it up.`
    },
    5: {
        subject: "punk",
        type: "statement",
        delay: 3000,
        delaySet: false,
        timerComplete: false,
        text: `I'll uh... Check into it.`
    },
    6: {
        subject: "coolDude",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        text: `Yeah, man, do so.`
    },
    7: {
        subject: "coolDude",
        type: "question",
        delay: 3000,
        delaySet: false,
        timerComplete: false,
        text: `Hey man, you mind if I ask you some questions? Trivia and junk. I always wanted to be a gameshow host... Never really got around to it.`,
    }
};