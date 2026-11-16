# Pirámide de asteriscos
# Pide la altura y dibuja el triángulo con ciclos anidados, sin usar "*" * n.

print("Bienvenido")

altura = int(input("Ingrese la altura de la pirámide: "))

for i in range(altura):
    for j in range(i+1):
        print("*", end="")
    print()
print("Pirámide de asteriscos")
print("Fin")