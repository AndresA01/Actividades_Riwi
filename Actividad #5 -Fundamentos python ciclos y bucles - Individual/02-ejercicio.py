# suma del 1 al n
# Pide un numero y muestra la suma de todos los números de 1 al numero. Usa for, range() y un acumulador.

print("Bienvenido")

n = int(input("Ingrese un número: "))

suma = 0
for n in range(1, n+1):
    anterior = suma
    suma += n
    print(f"Paso {n}: {anterior} + {n} = {suma}")
print("La suma de todos los números de 1 al", n, "es:", suma)