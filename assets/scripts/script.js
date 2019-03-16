var script = {
    length: 28,
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
        delay: 3000,
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
        text: `Yeah, do so.`
    },
    7: {
        subject: "coolDude",
        type: "question",
        delay: 3000,
        delaySet: false,
        timerComplete: false,
        answer: 0,
        choices: {
            amount: 2,
            1: "Sure...",
            2: "Please don't."
        },
        text: `Hey, you mind if I ask you some questions? Trivia and junk. I always wanted to be a gameshow host... Never really got around to it.`,
        doAfter: function () {
            if(this.answer === 1) {
                script[8].text = "Sure, go for it.";
            } else {
                script[8].text = "Please don't.";
            }
        }
    },
    8: {
        subject: "punk",
        type: "statement",
        delay: 500,
        delaySet: false,
        timerComplete: false,
        text: ``,
        doAfter: function () {
            if (this.text === "Please don't.") {
                speechBubble.scriptComplete = true;
            }
        }
    },
    9: {
        subject: "coolDude",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        text: `Awesome! Great. Alright, so... yeah, alright, let's go.`
    },
    10: {
        subject: "punk",
        type: "statement",
        delay: 4000,
        delaySet: false,
        timerComplete: false,
        text: `...Are you going to ask a question?`
    },
    11: {
        subject: "coolDude",
        type: "question",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        answer: 0,
        choices: {
            amount: 2,
            1: "...What?",
            2: "It's pretty good."
        },
        text: `Yeah, sorry, zoned out. Alright, first question: Have you heard Skinned and Alone's new album?`,
        doAfter: function () {
            if (this.answer === 1) {
                script[12].text = "...That's not a trivia question.";
                script[13].text = "Oh damn, you're right.";
            } else {
                script[12].text = "Yeah, it's pretty good. It really seemed like a callback to their earlier albums. Solid stuff.";
                script[13].text = `Right? It's great seeing them go back to that brutal, unrestrained edge that they had before, it's like a warm hug from an old friend. A friend covered in razor blades and nails.`;
            }
        }
    },
    12: {
        subject: "punk",
        type: "statement",
        delay: 500,
        delaySet: false,
        timerComplete: false,
        text: ``,
    },
    13: {
        subject: "coolDude",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        text: ``
    },
    14: {
        subject: "punk",
        type: "statement",
        delay: 3000,
        delaySet: false,
        timerComplete: false,
        text: `So you really never made it as a gameshow host, huh?`
    },
    15: {
        subject: "coolDude",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        text: `That's what I'm saying, it's crazy. I would've been great...`
    },
    16: {
        subject: "coolDude",
        type: "question",
        delay: 3000,
        delaySet: false,
        timerComplete: false,
        answer: 0,
        choices: {
            amount: 4,
            1: "...",
            2: "Wait, what?",
            3: "Hieronymus Bosch",
            4: "Van Gogh?"
        },
        text: `Anyway, here's another: Born in 1450, this Dutch painter is one of the most notable painters of the Early Netherlandish Renaissance movement. His paintings- and primarily his triptychs- are characterized by their gruesome and fantastic depictions of heaven, hell, and earth. Who is the painter?`,
        doAfter: function () {
            switch (this.answer) {
                case 1:
                    script[17].text = "...Where did that come from?";
                    script[18].text = "I majored in anthropology with a minor in art. The answer's Van Gogh.";
                    break;
                case 2:
                    script[17].text = "Wait, hold on, what?";
                    script[18].text = "Hah, yeah, sorry, I read about that online. Pretty sure it was Van Gogh.";
                    break;
                case 3:
                    script[17].text = "Wasn't that... Hiernymus Bosch? Where'd that question come from?";
                    script[18].text = `Nope, it was Van Gogh. Crazy guy, cutting his ear off and drawing heaven and hell. Artists are so weird, bro. If you ask me we should just worry about the earth are feet are on, y'know?`;
                    break;
                case 4:
                    script[17].text = "Pretty sure that's Van Gogh. Yup.";
                    script[18].text = "Yeah man, good job. That was a hard one.";
                    break;
            }
        }
    },
    17: {
        subject: "punk",
        type: "statement",
        delay: 500,
        delaySet: false,
        timerComplete: false,
        text: ``
    },
    18: {
        subject: "coolDude",
        type: "statement",
        delay: 2000,
        delaySet: false,
        timerComplete: false,
        text: ``
    },
    19: {
        subject: "coolDude",
        type: "statement",
        delay: 2000,
        delaySet: false,
        timerComplete: false,
        text: `Wait, shit, actually it was Hieronymus Bosch. My bad.`
    },
    20: {
        subject: "punk",
        type: "statement",
        delay: 2000,
        delaySet: false,
        timerComplete: false,
        text: `Well, this has been fun, but...`
    },
    21: {
        subject: "coolDude",
        type: "statement",
        delay: 250,
        delaySet: false,
        timerComplete: false,
        text: `Hold on, hold on, one more! I got it this time.`
    },
    22: {
        subject: "punk",
        type: "statement",
        delay: 1500,
        delaySet: false,
        timerComplete: false,
        text: `Alright, fine, one more. Last one. My station's coming up anyway.`
    },
    23: {
        subject: "coolDude",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        text: `Awesome, great! I got this! Here we go.`
    },
    24: {
        subject: "punk",
        type: "statement",
        delay: 500,
        delaySet: false,
        timerComplete: false,
        text: `Here we go...`
    },
    25: {
        subject: "coolDude",
        type: "question",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        answer: 0,
        choices: {
            amount: 4,
            1: "Seriously?",
            2: "Yellow",
            3: "Blue",
            4: "Red"
        },
        text: `Alright: what's my favorite color?`,
        doAfter: function () {
            switch (this.answer) {
                case 1:
                    script[26].text = "...Really, man? Is that seriously the question? God, I don't know. All colors.";
                    script[27].text = "Woah, I never thought about it that way... I think you're right. That's crazy.";
                    break;
                case 2:
                    script[26].text = "It's yellow.";
                    script[27].text = "Nope!";
                    break;
                case 3:
                    script[26].text = "...Is it blue?";
                    script[27].text = "Close!";
                    break;
                case 4:
                    script[26].text = "It wouldn't be red, would it?";
                    script[27].text = "Woah, how'd you know? Are you psychic?";
                    break;
            }
        }
    },
    26: {
        subject: "punk",
        type: "statement",
        delay: 500,
        delaySet: false,
        timerComplete: false,
        text: ``
    },
    27: {
        subject: "coolDude",
        type: "statement",
        delay: 1500,
        delaySet: false,
        timerComplete: false,
        text: ``
    },
    28: {
        subject: "punk",
        type: "statement",
        delay: 500,
        delaySet: false,
        timerComplete: false,
        text: `...`
    }
};