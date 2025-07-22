function adivinarNumero(){
    // Número secreto definido como constante
    const numeroSecreto = 7;

    // Contador de intentos
    let intentos = 0;

    // Máximo de intentos permitidos
    const maxIntentos = 3;

    // Variable para guardar el numero ingresado del usuario
    let datoIngresado = null;

    // Mientras no adivine y tenga intentos disponibles
    while (datoIngresado !== numeroSecreto && intentos < maxIntentos) {
        // Pedir al usuario que ingrese un número
        datoIngresado = Number(prompt("Adivina el número (del 1 al 10):"));

        // Aumentar el contador
        intentos++;

        // Verificar si adivinó o no
        if (datoIngresado === numeroSecreto) {
            alert("¡Felicitaciones! Adivinaste el número.");
        } else if (intentos < maxIntentos) {
            alert("No es el número correcto. Te quedan " + (maxIntentos - intentos) + " intento(s).");
        }
    }

    // Si se acabaron los intentos y no adivinó
    if (datoIngresado !== numeroSecreto) {
        alert("Lo siento, se acabaron tus intentos. El número correcto era " + numeroSecreto + ".");
    }
}

adivinarNumero();




