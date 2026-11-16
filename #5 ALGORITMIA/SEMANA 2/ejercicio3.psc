Proceso TarifasParqueadero
    Definir tipoVehiculo Como Entero
    Definir horas Como Real
    Definir total Como Real
    
    Escribir "=== SISTEMA DE TARIFAS DE PARQUEADERO ==="
    Escribir "Seleccione el tipo de vehículo:"
    Escribir "1. Automóvil ($2,000 por hora)"
    Escribir "2. Moto ($1,000 por hora)"
    Escribir "3. Bicicleta (Gratis)"
    Leer tipoVehiculo
    
    Escribir "Ingrese la cantidad de horas estacionado:"
    Leer horas
    
    Segun tipoVehiculo Hacer
        1:
            total <- horas * 2000
            Escribir "Vehículo: Automóvil. Total a pagar: $", total
        2:
            total <- horas * 1000
            Escribir "Vehículo: Moto. Total a pagar: $", total
        3:
            total <- 0
            Escribir "Vehículo: Bicicleta. Total a pagar: $0 (Gratis)"
        De Otro Modo:
            Escribir "Error: Opción de vehículo no válida."
    FinSegun
FinProceso