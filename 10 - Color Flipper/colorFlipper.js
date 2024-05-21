const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const teal = Math.round(Math.random() * 255);
    const turquoise = Math.round(Math.random() * 255);
    const pink = Math.round(Math.random() * 255);

    const color = `rgb(${teal} ${turquoise} ${pink})`
    body.style.backgroundColor = color;
}
