Proceso CalculadoraPropina
    Definir totalCuenta, porcentajePropina, montoPropina, totalConPropina, pagoPorPersona Como Real
    Definir numPersonas Como Entero
    
    Escribir "=== CALCULADORA DE PROPINA Y CUENTA ==="
    Escribir "Ingrese el valor total de la cuenta:"
    Leer totalCuenta
    
    Escribir "Ingrese el porcentaje de propina (ejemplo: 10, 15, 20):"
    Leer porcentajePropina
    
    Escribir "Ingrese el número de personas a dividir la cuenta:"
    Leer numPersonas
    
    // Proceso
    montoPropina <- totalCuenta * (porcentajePropina / 100)
    totalConPropina <- totalCuenta + montoPropina
    
    Si numPersonas > 0 Entonces
        pagoPorPersona <- totalConPropina / numPersonas
        
        // Salida
        Escribir "----------------------------------"
        Escribir "Monto de propina: $", montoPropina
        Escribir "Total con propina: $", totalConPropina
        Escribir "Cada persona debe pagar: $", pagoPorPersona
        Escribir "----------------------------------"
    Sino
        Escribir "Error: El número de personas debe ser mayor a cero."
    FinSi
FinProceso