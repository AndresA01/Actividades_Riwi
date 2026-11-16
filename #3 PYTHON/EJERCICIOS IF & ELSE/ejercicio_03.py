# Positivo o negativo
# Solicita un número e indica si es positivo, negativo o cero.
print("Bienvenido")

numero = int(input("Ingrese un número: "))

if numero == 0:
    print("El número es 0")
elif numero > 0:
    print("El número es positivo")
else:
    print("El número es negativo")