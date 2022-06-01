import Button from './scripts/button';

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("click");
    const message = document.getElementById("message");
    const count = document.getElementById("count");
    Button(button, message, count);
})