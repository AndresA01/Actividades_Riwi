function analizarCalificaciones() {
   
    let cantidadEstudiantes = parseInt(prompt("¿Cuántas calificaciones desea ingresar?"));
    
    if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0) {
        alert("Cantidad no válida.");
        return;
    }

    let notas = [];

  
    for (let i = 0; i < cantidadEstudiantes; i++) {
        let nota = parseFloat(prompt(`Ingrese la calificación del estudiante ${i + 1}:`));
        notas.push(nota);
    }


    let notaMaxima = notas[0];
    let notaMinima = notas[0];
    let sumaTotal = 0;
    let aprobados = 0;
    const notaMinimaAprobar = 3.0; 

    for (let i = 0; i < notas.length; i++) {
        let notaActual = notas[i];

        if (notaActual > notaMaxima) notaMaxima = notaActual;
        if (notaActual < notaMinima) notaMinima = notaActual;
        
        sumaTotal += notaActual;

        if (notaActual >= notaMinimaAprobar) {
            aprobados++;
        }
    }

    let promedio = sumaTotal / notas.length;

    alert(`--- RESULTADOS ---
Nota Más Alta: ${notaMaxima}
Nota Más Baja: ${notaMinima}
Promedio del Grupo: ${promedio.toFixed(2)}
Estudiantes Aprobados: ${aprobados}`);
}

analizarCalificaciones();