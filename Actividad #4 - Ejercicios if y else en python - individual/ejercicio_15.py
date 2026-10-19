# Sistema de facturación
# Solicita el nombre del cliente, el producto, su precio y la cantidad. Calcula el subtotal y aplico estos descuentos: 500.000 o más: 15%, 200.000 o más: 10%, menos de 200.000: sin descuento. Muestra una factura con el subtotal, el descuento y el total a pagar.

nombre_cliente = input("Por favor, ingrese el nombre del cliente: ")
producto = input("Por favor, ingrese el nombre del producto: ")
precio = float(input("Por favor, ingrese el precio del producto: "))
cantidad = int(input("Por favor, ingrese la cantidad: "))

subtotal = precio * cantidad

if subtotal >= 500000:
    descuento = subtotal * 0.15
elif subtotal >= 200000:
    descuento = subtotal * 0.10
else:
    descuento = 0

total = subtotal - descuento

print(f"\nFactura para {nombre_cliente}")
print(f"Producto: {producto}")
print(f"Precio: ${precio}")
print(f"Cantidad: {cantidad}")
print(f"Subtotal: ${subtotal}")
print(f"Descuento: ${descuento}")
print(f"Total a pagar: ${total}")