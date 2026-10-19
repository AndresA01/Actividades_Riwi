# Cajero RIWI
# El saldo inicial es 100000.
#Un menú con while se repite hasta elegir 4 (Salir).
#Opción 1 consulta el saldo, 2 deposita y 3 retira.
#No permitas retirar más del saldo ni montos negativos.
#Al salir, muestra cuántas operaciones exitosas se hicieron.
#Extra: si la opción no está entre 1 y 4, muestra “Opción inválida”.

print("Bienvenido al Cajero RIWI")

# Variables iniciales
saldo = 100000
operaciones_exitosas = 0
opcion = 0  # Inicializamos la opción en 0 para que entre al bucle

# El bucle se repite hasta que el usuario elija la opción 4
while opcion != 4:
    print("\n--- MENÚ DE OPCIONES ---")
    print("1. Consultar saldo")
    print("2. Depositar")
    print("3. Retirar")
    print("4. Salir")
    
    opcion = int(input("Por favor elija una opción: "))
    
    if opcion == 1:
        # Opción 1: Consulta de saldo
        print(f"Su saldo actual es: ${saldo}")
        operaciones_exitosas += 1
        
    elif opcion == 2:
        # Opción 2: Depositar
        monto_deposito = float(input("Ingrese el monto a depositar: "))
        if monto_deposito > 0:
            saldo += monto_deposito
            print(f"Depósito exitoso. Nuevo saldo: ${saldo}")
            operaciones_exitosas += 1
        else:
            print("Error: El monto a depositar debe ser mayor a cero.")
            
    elif opcion == 3:
        # Opción 3: Retirar
        monto_retiro = float(input("Ingrese el monto a retirar: "))
        if monto_retiro <= 0:
            print("Error: El monto a retirar debe ser mayor a cero.")
        elif monto_retiro > saldo:
            print(f"Error: Fondos insuficientes. Su saldo disponible es ${saldo}.")
        else:
            saldo -= monto_retiro
            print(f"Retiro exitoso. Nuevo saldo: ${saldo}")
            operaciones_exitosas += 1
            
    elif opcion == 4:
        # Opción 4: Salir
        print("\nGracias por usar el Cajero RIWI. ¡Hasta luego!")
        print(f"Total de operaciones exitosas realizadas: {operaciones_exitosas}")
        
    else:
        # Extra: Opción inválida
        print("Opción inválida. Por favor, intente de nuevo.")

