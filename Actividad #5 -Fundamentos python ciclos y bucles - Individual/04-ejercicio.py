# Contador de vocales
# Pide un texto y cuenta cuántas vocales tiene, sin importar si están en mayúscula o minúscula.

print("Bienvenido")

texto = input("Ingrese un texto: ")

vocales = 0
for letra in texto:
    if letra in "aeiouAEIOU":
        vocales += 1

print("El texto tiene", vocales, "vocales")