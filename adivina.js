function adivinarNumero(){
    // Número secreto definido como constante
    const numeroSecreto = 7;

    // Contador de intentos
    let intentos = 0;

    // Máximo de intentos permitidos
    const maxIntentos = 3;

    // Variable para guardar el intento del usuario
    let intento = null;

    // Mientras no adivine y tenga intentos disponibles
    while (intento !== numeroSecreto && intentos < maxIntentos) {
    // Pedir al usuario que ingrese un número
    intento = Number(prompt("Adivina el número (del 1 al 10):"));

    // Aumentar el contador
    intentos++;

    // Verificar si adivinó o no
    if (intento === numeroSecreto) {
        alert("¡Felicitaciones! Adivinaste el número.");
    } else if (intentos < maxIntentos) {
        alert("No es el número correcto. Te quedan " + (maxIntentos - intentos) + " intento(s).");
    }
    }

    // Si se acabaron los intentos y no adivinó
    if (intento !== numeroSecreto) {
    alert("Lo siento, se acabaron tus intentos. El número correcto era " + numeroSecreto + ".");
    }
}

//adivinarNumero();

function adivinarPorjs(){
    let datoEntrada = parseInt(document.getElementById("dato").value);
    if(datoEntrada === 7){
        document.getElementById("p-info").textContent = "Felicitaciones, adivinaste!"
    }
    else{
       document.getElementById("p-info").textContent = "Perdiste, vuelve a intentarlo!"
    }
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn-enviar").addEventListener("click",adivinarPorjs);
})


