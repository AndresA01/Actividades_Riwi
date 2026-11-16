Proceso ValidacionDeMorgan
    Definir edad Como Entero
    Definir tienePermiso Como Logico
    Definir respuestaPermiso Como Caracter
    
    Escribir "=== VALIDACIÓN DE ACCESO CON DE MORGAN ==="
    Escribir "Ingrese su edad:"
    Leer edad
    Escribir "¿Tiene autorización de sus padres? (S/N):"
    Leer respuestaPermiso
    
    Si respuestaPermiso = "S" o respuestaPermiso = "s" Entonces
        tienePermiso <- Verdadero
    Sino
        tienePermiso <- Falso
    FinSi
    
    // Regla aplicada con De Morgan para BLOQUEAR acceso:
    // Original de autorización: (edad >= 18) O (edad < 18 Y tienePermiso)
    // Negación directa (Bloqueo): (edad < 18) Y (NO tienePermiso)
    
    Si (edad < 18) Y (NO tienePermiso) Entonces
        Escribir "ACCESO DENEGADO: Es menor de edad y no cuenta con la autorización."
    Sino
        Escribir "ACCESO PERMITIDO: Cumple con los requisitos."
    FinSi
FinProceso