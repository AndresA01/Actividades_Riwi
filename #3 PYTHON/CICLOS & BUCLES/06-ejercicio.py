# Pares e impares
# Recorre del 1 al 20, salta los múltiplos de 5 con continue y cuenta cuántos pares e impares quedan.

print("Bienvenido")

pares = 0
impares = 0
for i in range(1, 21):
    if i % 5 == 0:
        continue
    if i % 2 == 0:
        pares += 1
    else:
        impares += 1
print("Hay", pares, "números pares y", impares, "números impares")