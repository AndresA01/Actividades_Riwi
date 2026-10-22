# Calificaciones
# Solicita una nota de 0 a 100 e indica si el estudiantes esta aprobado (70 o mas) o reprobado. valida la nota 

print("Bienvenido a tu calificacion")
print("\n")
name = input ("Como es tu nombre?: ")
print("\n")
note = int(input("Ingresa tu nota de 0 a 100: "))
if note < 0 or note > 100:
    print("Tu nota es invalida")
else:
    if note >= 70:
        print("Tu calificacion es aprobada")
    else:
        print("Tu calificacion es reprobada")