# Calculadora basica

print("Bienvenido")

numero1 = int(input("Ingresa el rimer número"))
numero2 = int(input("Ingresa el segundo número"))
Op = input("Ingresa la operación (+,-,*,/)")

if Op == "+":
    print("La suma es: ", numero1+numero2)
if Op == "-":
    print("La resta es: ", numero1-numero2)
if Op == "*":
    print("La multiplicación es: ", numero1*numero2)
if Op == "/":
    print("La división es: ", numero1/numero2)
else:
    print("Operación inválida")