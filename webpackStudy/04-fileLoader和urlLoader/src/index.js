import image from '../img/test.jpg'
// const imgtest = require('../img/test.jpg').default
function creasteImg() {
    const body = document.documentElement;

    const img = new Image();
    img.src = image;
    body.appendChild(img);
}

creasteImg()