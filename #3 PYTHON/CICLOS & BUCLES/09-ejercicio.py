#FizzBuzz
# Del 1 al 15: múltiplo de 3 → Fizz, de 5 → Buzz, de ambos → FizzBuzz; si no, el número.

print("Bienvenido")

for i in range(1, 16):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)