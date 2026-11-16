# Temperatura
# Solicita una temperatura y califica: menos de 10°c: frio, de 10 a menos de 25°c: templado, de 25 a 35°c: caluroso, de 35°c o mas: muy caluroso

temperature = int(input("Ingresa la temperatura: "))
if temperature < 10:
    print("Tu temperatura es frio")
elif temperature < 25:
    print("Tu temperatura es templado")
elif temperature < 35:
    print("Tu temperatura es caluroso")
else:
    print("Tu temperatura es muy caluroso")
