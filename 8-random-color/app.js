const headline = document.querySelector("#rgbValues");
const button = document.querySelector("#rndColGenerator");
const body = document.querySelector("body");

function changeColor() {
    let rgb = `rgb(${generateRandomColorValue()}, ${generateRandomColorValue()}, ${generateRandomColorValue()})`;
    headline.textContent = rgb;
    body.style.backgroundColor = rgb;
}

function generateRandomColorValue() {
    return Math.floor(Math.random() * 255) + 1;
}

button.addEventListener("click", changeColor);
