# Tabla de multiplicar
# Pide un número y muestra su tabla del 1 al 10 con el formato 7 x 1 = 7.

print("Bienvenido")

n = int(input("Ingrese un número: "))

for i in range(1, 11):
    resultado = n * i
    print(f"{n} x {i} = {resultado}")
