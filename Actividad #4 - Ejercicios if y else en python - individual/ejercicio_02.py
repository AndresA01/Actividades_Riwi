# Suma y resta

print("Bienvenido")

# Suma

numero1 = int(input("Ingrese el primer número: "))
numero2 = int(input("Ingrese el segundo número: "))

resultado_suma = numero1 + numero2
resultado_resta = numero1 - numero2

if resultado_suma < 10:
    print("El resultado de la suma es menor a 10")
else:
    print("El resultado de la suma es mayor o igual a 10")

# Resta

if resultado_resta < 10:
    print("El resultado de la resta es menor a 10")
else:
    print("El resultado de la resta es mayor o igual a 10")
