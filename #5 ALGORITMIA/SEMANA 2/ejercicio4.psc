Proceso SemaforoInventario
    Definir stock Como Entero
    
    Escribir "Ingrese el nivel actual de stock:"
    Leer stock
    
    // Evaluación de casos borde exactos (0, límites de alerta)
    Si stock <= 0 Entonces
        Escribir "ESTADO: CRÍTICO (Sin existencias)"
    Sino
        Si stock <= 10 Entonces
            Escribir "ESTADO: BAJO (Zona de alerta - Límite inferior)"
        Sino
            Si stock < 50 Entonces
                Escribir "ESTADO: MEDIO (Inventario regular)"
            Sino
                Escribir "ESTADO: ÓPTIMO (Stock suficiente - Límite superior alcanzado)"
            FinSi
        FinSi
    FinSi
FinProceso