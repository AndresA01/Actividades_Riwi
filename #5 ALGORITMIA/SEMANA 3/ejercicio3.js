function generarPiramide() {
    let pisos = parseInt(prompt("¿De cuántos pisos desea la pirámide de asteriscos?"));
    
    if (isNaN(pisos) || pisos <= 0) {
        alert("Por favor ingrese un número válido.");
        return;
    }

    let resultadoFinal = "";

    for (let i = 1; i <= pisos; i++) {
        let fila = "";

        // Espacios
        for (let j = 1; j <= pisos - i; j++) {
            fila += " ";
        }

        // Asteriscos
        for (let k = 1; k <= (2 * i - 1); k++) {
            fila += "*";
        }

        resultadoFinal += fila + "\n"; 
    }

    
    console.log(resultadoFinal);
    alert("Pirámide generada con éxito. Por favor, revisa la CONSOLA del navegador (F12) para verla perfectamente alineada.");
}

generarPiramide();