# Tipo de triangulo
# Solicita los tres lados de un triángulo. comprueba si es válido y clasificalo como equilátero, isosceles o escaleno.

print("Bienvenido a tu triangulo")
print("\n")
lado1 = int(input("Ingresa el primer lado: "))
lado2 = int(input("Ingresa el segundo lado: "))
lado3 = int(input("Ingresa el tercer lado: "))

if lado1 == lado2 and lado2 == lado3:
    print("Tu triangulo es equilátero")
elif lado1 == lado2 or lado2 == lado3 or lado1 == lado3:
    print("Tu triangulo es isosceles")
else:
    print("Tu triangulo es escaleno")