
function ComponenteItemLista(items) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].precio * items[i].cantidad;
    }
    return subtotal;
}

function ComponenteImpuestos(montoBase) {
    return montoBase * 0.08; 
}

function ComponentePropina(montoBase) {
    return montoBase * 0.10; 
}


function ComponenteFacturaRaiz() {
    let pedido = { productos: [] };
    let continuar = true;

   
    while (continuar) {
        let nombre = prompt("Ingrese el nombre del plato / bebida:");
        let precio = parseFloat(prompt(`Ingrese el precio de "${nombre}":`));
        let cantidad = parseInt(prompt(`¿Cuántas unidades de "${nombre}" ordenaron?`));

        // Guardamos el producto en nuestra lista
        pedido.productos.push({ nombre, precio, cantidad });

        // Preguntamos si desea seguir agregando productos
        let respuesta = prompt("¿Desea agregar otro producto? (si / no)").toLowerCase();
        if (respuesta !== "si" && respuesta !== "s") {
            continuar = false;
        }
    }

    
    const subtotal = ComponenteItemLista(pedido.productos);
    const impuesto = ComponenteImpuestos(subtotal);
    const propina = ComponentePropina(subtotal);
    const totalPagar = subtotal + impuesto + propina;

   
    alert(`--- FACTURA DE CONSUMO ---
Subtotal Platos: $${subtotal}
Impuesto Consumo (8%): $${impuesto}
Propina Sugerida (10%): $${propina}
--------------------------
TOTAL A PAGAR: $${totalPagar}`);
}

ComponenteFacturaRaiz();