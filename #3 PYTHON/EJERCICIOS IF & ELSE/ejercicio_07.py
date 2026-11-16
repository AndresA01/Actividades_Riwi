# Mayoría de edad
# Solicita la edad de una persona e indica si puede ingresar a un evento para mayores de 18 años. Valida que la edad no sea negativa.

print("Bienvenido a Blue Label club")
print("Debemos revisar si cumples con la edad mínima para ingresar")

edad = int(input("Ingresa tu edad:"))

if edad > 18:
    print("Bienvenido al club, puedes ingresar")
elif edad <= 0:
    print("Ingresa una edad válida")
else:
    print("No puedes ingresar al club, no cuentas con la edad requerida")
