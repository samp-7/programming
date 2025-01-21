let usuario

document.getElementById("mysubmit").onclick = function() {
    usuario = document.getElementById("myinput").value;
    document.getElementById("myH1").textContent = `Hello, ${usuario}!`
    console.log(usuario)
} 