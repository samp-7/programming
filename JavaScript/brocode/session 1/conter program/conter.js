const colocar = document.getElementById("colocar")
const apagar = document.getElementById("apagar")
const tirar = document.getElementById("tirar")
const constLabel = document.getElementById("constLabel")
let count = 0;

colocar.onclick = function() {
    count++;
    constLabel.textContent = count;
}

tirar.onclick = function() {
    count--;
    constLabel.textContent = count;
}

apagar.onclick = function() {
    count = 0;
    constLabel.textContent = count;
}

