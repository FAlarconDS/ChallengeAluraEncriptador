// Variables que apuntan a elementos del DOM
var texto = document.getElementById("txtEncryptDecrypt");
var rectangle1 = document.querySelector("#rectangle1");
var rectangle2 = document.querySelector("#rectangle2");
var btnEncrypt = document.querySelector(".btnEncrypt");
var btnDecrypt = document.querySelector(".btnDecrypt");
var btnCopy = document.querySelector(".btnCopy");

// Muestra el segundo rectángulo y oculta el primero
function mostrarRectangulo() {
    rectangle1.style.display = "none";
    rectangle2.style.display = "inline";
}

// Encripta el texto ingresado y lo muestra en el área de resultado
function encriptarTexto() {
    let textoIn = texto.value.toString().toLowerCase();
    let nuevoTexto = textoIn
        .replace(/e/igm, 'enter')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/o/igm, 'ober')
        .replace(/u/igm, 'ufat');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

// Desencripta el texto ingresado y lo muestra en el área de resultado
function desencriptarTexto() {
    let textoIn = texto.value;
    let nuevoTexto = textoIn
        .replace(/enter/igm, 'e')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ober/igm, 'o')
        .replace(/ufat/igm, 'u');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

// Copia el texto encriptado/desencriptado al portapapeles y limpia el campo de entrada
function copiarTexto() {
    var content = document.getElementById('areaEncrypt');
    content.select();
    document.execCommand('copy');
    texto.value = "";
}

// Asignación de eventos a los botones
btnEncrypt.addEventListener('click', function () {
    mostrarRectangulo();
    encriptarTexto();
});

btnDecrypt.addEventListener('click', function () {
    mostrarRectangulo();
    desencriptarTexto();
});

btnCopy.addEventListener('click', function () {
    copiarTexto();
});