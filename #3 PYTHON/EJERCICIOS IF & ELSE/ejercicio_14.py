# Cajero automatico
# Crea un cajero con un saldo inicial de $500.000 y estos opciones: Colsultar saldo, Retirar dinero, Depositar dinero, salir.

print("Bienvenido al Cajero Santa Lucia")
print("\n")

print("Presione 1 para consultar su saldo")
print("Presiones 2 para Retirar dinero")
print("Presione 3 para depositar dinero")
print("Presione 4 para salir")

opcion = int(input("Escriba la opcion deseada: "))

if opcion == 1:
    print("Su saldo actual es de $500000")
elif opcion == 2:
    retiro = int(input("¿Cuanto dinero deseas retirar?: "))
    if retiro <= 500000:
        print(f"has realizado un retiro de ${retiro}")
        print(f"Tu saldo actual es de ${500000 - retiro}")
    else:
        print("No tienes suficiente saldo")
elif opcion == 3:
    ingreso = int(input("Ingrese el monto a depositar"))
    print(f"Haz depositado ${ingreso} a tu cuenta")
    print(f"Tu saldo actual es de ${500000 + ingreso}")
else:
    print("Operación finalizada")