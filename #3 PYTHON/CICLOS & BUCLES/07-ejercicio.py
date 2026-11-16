# Adivina el número
# Secreto: 37. Pide intentos y responde “más alto” o “más bajo” hasta acertar. Muestra los intentos usados.

print("Bienvenido")

secreto = 37
intentos = 0

while True:
    intentos += 1
    intento = int(input("Ingrese un número entre 1 y 100: "))

    if intento == secreto:
        print("Felicidades, has acertado el número en", intentos, "intentos!")
        break
    elif intento < secreto:
        print("Más alto")
    else:
        print("Más bajo")