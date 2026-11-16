#comparador de numeros
num1 = int(input("Ingresa el primero numero: "))
num2 = int(input("Ingresa el segundo numero: "))
num3 = int(input("Ingrese el tercer numero: "))

if num1<=num2<=num3:
    print(num1,num2,num3)
elif num2<=num1<=num3:
    print(num2,num1,num3)
elif num3<=num1<=num2:
    print(num3,num1,num2)
elif num1<=num3<=num2:
    print(num1,num3,num2)
elif num2<=num3<=num1:
    print(num2,num3,num1)
elif num3<=num2<=num1:
    print(num3,num2,num1)