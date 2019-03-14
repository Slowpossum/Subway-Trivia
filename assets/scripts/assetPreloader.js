var imagesToLoad = ["./assets/images/subwayCar.png", "./assets/images/coolDude.png", "./assets/images/punk.png", 
                    "./assets/images/light.png"];
var loadedImages = loadImages(imagesToLoad);

function loadImages(arr) {
    this.images = {};

    for (var i = 0; i < arr.length; i++){
        var img = new Image();
        img.src = arr[i];
        this.images[arr[i]] = img;
    }
    
    return this.images;
}