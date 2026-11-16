function simularCajero() {
    let totalRetirado = 0; 
    let cantidadRetiros = 0;
    
    
    let monto = parseFloat(prompt("Ingrese el monto a retirar (O digite 0 para terminar):"));

  
    while (monto > 0) {
        totalRetirado += monto; 
        cantidadRetiros++;     
        
        
        monto = parseFloat(prompt(`Monto acumulado: $${totalRetirado}.\nIngrese el siguiente monto (O digite 0 para terminar):`));
    }

    
    alert(`--- RESUMEN DEL CAJERO ---\nTotal retirado: $${totalRetirado}\nCantidad de retiros: ${cantidadRetiros}`);
}

simularCajero();
