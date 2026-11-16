Proceso ReglaDescuento
    Definir esVIP, tieneCupon Como Logico
    Definir respuestaVIP, respuestaCupon Como Caracter
    
    Escribir "=== EVALUADOR DE REGLAS DE DESCUENTO ==="
    Escribir "¿Es cliente VIP? (S/N):"
    Leer respuestaVIP
    Escribir "¿Tiene cupón de descuento? (S/N):"
    Leer respuestaCupon
    
    // Conversión de texto a variables lógicas
    Si respuestaVIP = "S" o respuestaVIP = "s" Entonces
        esVIP <- Verdadero
    Sino
        esVIP <- Falso
    FinSi
    
    Si respuestaCupon = "S" o respuestaCupon = "s" Entonces
        tieneCupon <- Verdadero
    Sino
        tieneCupon <- Falso
    FinSi
    
    // Aplicación de la tabla de verdad (Disyunción / Operador O)
    Si esVIP o tieneCupon Entonces
        Escribir "Resultado: ¡APLICA para el descuento!"
    Sino
        Escribir "Resultado: No aplica para el descuento."
    FinSi
FinProceso