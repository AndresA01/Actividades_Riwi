# Descuento en compras
# Solicita el precio de una compra: 200.000 o más: 20% de descuento, 100.000 o más: 10% de descuento, menos de 100.000: sin descuento, muestra el total a pagar.

print("Bienvenido a tu compra")
print("\n")
price = int(input("Ingresa el precio de tu compra: "))
if price >= 200000:
    discount = 0.2
    print("Tu descuento es: 20%")
elif price >= 100000:
    discount = 0.1
    print("Tu descuento es: 10%")
else:
    discount = 0    
    print("Tu descuento es: 0%")

total_price = price - (price * discount)
print("Tu total a pagar es: " + str(total_price))   
