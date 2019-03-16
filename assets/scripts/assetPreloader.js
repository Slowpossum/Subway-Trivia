var imagesToLoad = ["./assets/images/subwayCar.png", "./assets/images/light.png", "./assets/images/speechBubble.png",
                    "./assets/images/bubbleTailLeft.png", "./assets/images/bubbleTailRight.png", "./assets/images/coolDudeIdle.png",
                    "./assets/images/punkIdle.png", "./assets/images/punkTurn.png", "./assets/images/punkTurnIdle.png",
                    "./assets/images/cursor.png"];
var loadedImages = loadImages(imagesToLoad);

function loadImages(arr) {
    this.images = {};

    for (var i = 0; i < arr.length; i++) {
        var img = new Image();
        img.src = arr[i];
        this.images[arr[i]] = img;
    }

    return this.images;
}