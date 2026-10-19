# Calculadora con menu
# Crea un menú con las opciones de sumar, restar, multiplicar y dividir. Ejecuta la operación seleccionada y muestra el resultado.

print("Bienvenido a la calculadora")

print("\n")

print("Selecciones una de las siguientes opciones: ")

print("1. Suma")
print("2. Resta")
print("3. Multiplicación")
print("4. División")

opcion = int(input("Ingrese la opción deseada (1-4): "))

numero1 = int(input("Ingrese el primer número: "))
numero2 = int(input("Ingrese el segundo número: "))

if opcion == 1:
    resultado = numero1 + numero2
    print(f"El resultado de la suma es: {resultado}")
elif opcion == 2:
    resultado = numero1 - numero2
    print(f"El resultado de la resta es: {resultado}")
elif opcion == 3:
    resultado = numero1 * numero2
    print(f"El resultado de la multiplicación es: {resultado}")
elif opcion == 4:
    if numero2 != 0:
        resultado = numero1 / numero2
        print(f"El resultado de la división es: {resultado}")
    else:
        print("Error: No se puede dividir entre cero.")
else:
    print("Opción no válida. Por favor, seleccione una opción válida (1-4).")