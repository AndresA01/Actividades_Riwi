# Número mayor

print("Bienvenido")

numero1 = int(input("Ingrese el primer número: "))
numero2 = int(input("Ingrese el segundo número: "))

if numero1 == numero2:
    print("Los número son iguales")
elif numero1 > numero2:
    print("El numero mayor es " + str(numero1))
else:
    print("El numero mayor es " + str(numero2))
