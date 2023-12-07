let numero_adivinanza = Math.floor(Math.random() * 100) + 1;

let numero = document.getElementById("pantalla");

let mensaje = document.getElementById("mensaje")

function comprobar_numero() {
    let numero_int = parseInt(numero.value);

    if (numero_int < 0 || numero_int > 100 || isNaN(numero_int)) {
        mensaje.textContent = "Introduzca un numero entre 1 al 100"
        mensaje.style.color = "white" 
    }
    if (numero_int < numero_adivinanza) {
        document.getElementById("mensaje1").innerHTML =
            "Ouh! no es la respuesta correcta :c";
        mensaje.textContent = "Pruebe un numero mas alto"
        mensaje.style.color = "red" 
    } else if (numero_int > numero_adivinanza) {
        document.getElementById("mensaje1").innerHTML =
            "Ouh! no es la respuesta correcta :o !";
        mensaje.textContent = "Pruebe un numero mas bajo"
        mensaje.style.color = "red" 
    } else if (numero_int === numero_adivinanza) {
        document.getElementById("principal").innerHTML = "FELICIDADES!!!!!!";
        document.getElementById("mensaje1").innerHTML =
            "Encontraste el numero correcto!!";
        document.getElementById("mensaje2").innerHTML = ":D !!!!!";
        mensaje.textContent = "YEIH! :3"
        mensaje.style.color = "green" 
        numero.disabled = true;
    }
}
