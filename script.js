import {array_4x4} from "../data/4x4.js";
import {array_32x32} from "../data/32x32.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let form_4 = document.getElementById("img_1");
let form_32 = document.getElementById("img_2");
let form_256 = document.getElementById("img_3");

ctx.fillStyle = "#7f7f7f";
ctx.fillRect(0, 0, 512, 512);

var field_128 = 128;
var field_16 = 16;

form_4.addEventListener("click", () => {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            ctx.fillStyle = `#${array_4x4[row][col]}`;
            ctx.fillRect(col * field_128, row * field_128, field_128, field_128);
        }
    }
});

form_32.addEventListener("click", () => {
    for (let row = 0; row < 32; row++) {
        for (let col = 0; col < 32; col++) {
            ctx.fillStyle = `rgb(${array_32x32[row][col]})`;
            ctx.fillRect(col * field_16, row * field_16, field_16, field_16);
        }
    }
});
    
form_256.addEventListener("click", () => {
        let image = new Image ();
        image.src = '../data/image.png';
        ctx.fillStyle = `#ffffff`;
        ctx.drawImage(image, 0, 0, 512, 512);
});