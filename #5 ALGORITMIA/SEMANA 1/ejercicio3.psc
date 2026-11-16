Proceso VerificarNumero
    Definir num Como Real
    
    Escribir "Ingrese un número:"
    Leer num
    
    // Decisión (Estructura condicional anidada)
    Si num > 0 Entonces
        Escribir "El número ingresado es POSITIVO."
    Sino
        Si num < 0 Entonces
            Escribir "El número ingresado es NEGATIVO."
        Sino
            Escribir "El número ingresado es CERO."
        FinSi
    FinSi
FinProceso