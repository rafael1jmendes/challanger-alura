e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat

function encriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i para aceitar tanto maiusculas como minusculas
    //g para aceitar toda a linha
    //m para aceitar multiplas linhas
    var txtcripto = texto.replace(/e/igm,"enter");
    var txtcripto = txtcripto.replace(/o/igm,"ober");
    var txtcripto = txtcripto.replace(/i/igm,"imes");
    var txtcripto = txtcripto.replace(/a/igm,"ai");
    var txtcripto = txtcripto.replace(/u/igm,"ufat");

    document.getElementById("img_search").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtcripto;    
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";




}

function desencriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i para aceitar tanto maiusculas como minusculas
    //g para aceitar toda a linha
    //m para aceitar multiplas linhas
    var txtcripto = texto.replace(/enter/igm,"e");
    var txtcripto = txtcripto.replace(/ober/igm,"o");
    var txtcripto = txtcripto.replace(/imes/igm,"i");
    var txtcripto = txtcripto.replace(/ai/igm,"a");
    var txtcripto = txtcripto.replace(/ufat/igm,"u");

    document.getElementById("img_search").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtcripto;    
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";




}

function copy() {

    var copiar = document.querySelector("#texto2");
    copiar.select();
    document.execCommand("copy");  
    alert("Copiado!");

}