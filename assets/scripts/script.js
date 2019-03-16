var script = {
    length: 3,
    1: {
        subject: "coolDude",
        type: "statement",
        delay: 4000,
        delaySet: false,
        timerComplete: false,
        text: "Hey, man. How's it going?" 
    },
    2: {
        subject: "coolDude",
        type: "statement",
        delay: 1000,
        delaySet: false,
        timerComplete: false,
        functionRun: false,
        text: "Hey! Buddy! I'm talking to YOU.",
        doAfter: function() {
            
        }
    },
    3: {
        subject: "punk",
        type: "statement",
        delay: 2000,
        delaySet: false,
        timerComplete: false,
        text: "Oh, sorry. Hey. What's up?" 
    }
};