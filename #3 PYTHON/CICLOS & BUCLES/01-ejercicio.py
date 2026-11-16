# Cuenta regresiva
# Pide un número con input() y muestra la cuenta regresiva hasta el 1; al final "¡Despegue!". Usa while.

print("Bienvenido al Despegue")

numero = int(input("Ingrese un número: "))

while numero > 0:
    print(numero)
    numero -= 1
else:
    print("¡Despegue!")