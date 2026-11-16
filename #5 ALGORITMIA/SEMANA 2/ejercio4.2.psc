Proceso AnioBisiesto
    Definir anio Como Entero
    
    Escribir "Ingrese un año para verificar si es bisiesto:"
    Leer anio
    
    // Regla matemática: Divisible por 4, excepto si es divisible por 100, a menos que sea divisible por 400.
    Si (anio MOD 4 = 0 Y anio MOD 100 <> 0) O (anio MOD 400 = 0) Entonces
        Escribir "El año ", anio, " SÍ es bisiesto."
    Sino
        Escribir "El año ", anio, " NO es bisiesto."
    FinSi
FinProceso