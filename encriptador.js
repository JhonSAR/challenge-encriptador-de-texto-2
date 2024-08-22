let textoInicial = document.querySelector(".contenido-texto-original");
let textoResultado = document.querySelector(".texto-modificado");

function botonEncriptar() {
    // Al pulsar el botón encriptar, se realiza también la validación del texto ingresado
    let textoValidado = validarTexto(textoInicial.value);
    textoInicial.value = "";
    // el querySelector y textoResultado.style permite que la etiqueta p y la imagen desaparezcan al dar click
    document.querySelector(".texto-informativo").style.display = "none";
    textoResultado.style.backgroundImage = "none";
}

function encriptarTexto(textoIngresado) {
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; //matriz para el valor de cada vocal
    textoIngresado = textoIngresado.toLowerCase();

    for(let i = 0; i < llaveEncriptacion.length; i++) {
        if(textoIngresado.includes(llaveEncriptacion[i] [0])) {
            textoIngresado = textoIngresado.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1])
        }
    }
    return textoIngresado;
}

// Función que valida si el texto cumple con los parámetros requeridos
function validarTexto(textoPorValidar) {
    // RegEx, expresión regular literal que permite la búsqueda de mayúsculas y caracteres especiales
    let regex = /[A-ZÁÉÍÓÚÜáéíóúü@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    // Condiconal que valida si el texto tiene mayúsculas o caracteres
    if (regex.test(textoPorValidar)) {
        alert("No está permitido el uso de mayúsculas ni caracteres especiales.");
        return false;
    } else {
        let textoEncriptado = encriptarTexto(textoInicial.value); // Variable que recibe la función del texto ingresado por usuario
        textoResultado.value = textoEncriptado;
        return true;
    }
}

function botonDesencriptar() {
    let textoEncriptado = desencriptarTexto(textoInicial.value);
    textoResultado.value = textoEncriptado;
    textoInicial.value = "";
    // el querySelector y textoResultado.style permite que la etiqueta p y la imagen desaparezcan al dar click
    document.querySelector(".texto-informativo").style.display = "none";
    textoResultado.style.backgroundImage = "none";
}

function desencriptarTexto(textoDesencriptado) {
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < llaveEncriptacion.length; i++) {
        if(textoDesencriptado.includes(llaveEncriptacion[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(llaveEncriptacion[i][1], llaveEncriptacion[i][0])
        }
    }
    return textoDesencriptado;
}

function copiarTexto() {
    // Acceder al campo del texto a copiar
    let textoCopiado = document.getElementById("textoModificado");
    
    // Selecciona el texto dentro del elemento textarea
    textoCopiado.select();

    // Copia el texto del elemento textarea y lo guarda en el portapapeles del navegador
    navigator.clipboard.writeText(textoCopiado.value);
}

// El método addEventListener permite que cuando se de click en encriptar, se haga visible el botón de copiar
document.getElementById("botonEncriptar").addEventListener('click', function() {
    document.getElementById("botonCopiar").style.display = 'block';
});

function botonLimpiar() {
    // Este método permite recargar la página y reiniciar su contenido
    window.location.reload();
}