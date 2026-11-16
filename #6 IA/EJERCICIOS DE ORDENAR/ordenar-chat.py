a = int(input("Ingresa el primer número: "))
b = int(input("Ingresa el segundo número: "))
c = int(input("Ingresa el tercer número: "))

if a <= b and a <= c:
    if b <= c:
        print(a, b, c)
    else:
        print(a, c, b)
else:
    if b <= a and b <= c:
        if a <= c:
            print(b, a, c)
        else:
            print(b, c, a)
    else:
        if a <= b:
            print(c, a, b)
        else:
            print(c, b, a)