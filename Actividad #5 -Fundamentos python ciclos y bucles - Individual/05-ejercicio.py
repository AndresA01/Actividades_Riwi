# Notas del grupo 
# Con notas = [4.5, 2.8, 3.9, 3.0, 2.2] calcula el promedio y cuántos aprobaron (nota ≥ 3.0).

print("Bienvenido")

notas = [4.5, 2.8, 3.9, 3.0, 2.2]

promedio = sum(notas) / len(notas)
print("El promedio del grupo es:", promedio)

aprobados = 0
for nota in notas:
    if nota >= 3.0:
        aprobados += 1
print("El número de alumnos aprobados es:", aprobados)