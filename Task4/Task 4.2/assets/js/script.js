var images = [], x = -1;
images[0] = "assets/img/02-large.jpg";
images[1] = "assets/img/03-large.jpg";
images[2] = "assets/img/04-large.jpg";
images[3] = "assets/img/05-large.jpg";
images[4] = "assets/img/06-large.jpg";
images[5] = "assets/img/07-large.jpg";
images[6] = "assets/img/08-large.jpg";
images[7] = "assets/img/09-large.jpg";


function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 1000);
}

