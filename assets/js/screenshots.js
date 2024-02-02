let images = ["screenshot_01.png", "screenshot_02.png", "screenshot_03.png", "screenshot_04.png", "screenshot_05.png", "screenshot_06.png", "screenshot_07.png", "screenshot_08.png"];
let screenshot = document.getElementById("screenshot");
let text = document.getElementById("text");
let length = images.length;
let img = document.getElementById("screenshot");
let index = 0;
let number = 1;

text.innerText = number + " / " + length;
video(number);

function previous() {
    index = (((index - 1) % length) + length) % length;
    img.src = folder + images[index];
    number = index + 1;
    text.innerText = number + " / " + length;
    video(number);
}

function next() {
    index = (index + 1) % length;
    img.src = folder + images[index];
    number = index + 1;
    text.innerText = number + " / " + length;
    video(number);
}


function video(number) {
    if (number == 1) {
        screenshot.style.cursor = "pointer";
        screenshot.addEventListener('mouseover', function() {
            screenshot.style.opacity = '0.8';
        });
        screenshot.addEventListener('mouseout', function() {
            screenshot.style.opacity = '1';
        });
        screenshot.style.transition = "opacity 0.2s";
        screenshot.onclick = open_trailer;
    }
    else {
        screenshot.style.cursor = "default";
        screenshot.style.opacity = '1';
        screenshot.addEventListener('mouseover', function() {
            screenshot.style.opacity = '1';
        });
        screenshot.addEventListener('mouseout', function() {
            screenshot.style.opacity = '1';
        });
        screenshot.onclick = null;
    }
}

setInterval(function() {
    index = (index + 1) % length;
    img.src = folder + images[index];
    number = index + 1;
    text.innerText = number + " / " + length;
    video(number);
}, 5000);

function open_trailer() {
    window.open("https://www.youtube.com/watch?v=Hk9krZfDKkA", "_blank");
}