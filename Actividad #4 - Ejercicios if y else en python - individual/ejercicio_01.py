# Nombre y edad
# Solicita el nombre y la edad de una persona. Muestra su nombre e indica si es mayor de edad.

print("Bienvenido")

nombre = input("Ingrese su nombre: ")
edad = int(input("Ingrese su edad: "))

if edad >= 18:
    print(nombre + " es usted mayor de edad")
else:
    print(nombre + " es usted menor de edad")
