# Usario y contraseña
# Solicita un usuarios y una contraseña. Compara los datos con valores definidos y permite el acceso si ambos coinciden, si no coinciden muestra un mensaje de error.

username = input("Ingresa tu usuario: ")
password = input("Ingresa tu contraseña: ")
if username == "admin" and password == "123456":
    print("Tu acceso es correcto")
else:
    print("Tu acceso es incorrecto")

