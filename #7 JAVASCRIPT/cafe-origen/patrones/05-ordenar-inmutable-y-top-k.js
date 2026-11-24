/**
 * ============================================================================
 * GUÍA DE PATRÓN 05: ORDENAMIENTO SIN MUTAR Y RANKINGS (TOP K)
 * ============================================================================
 * Ejecuta este archivo con: node patrones/05-ordenar-inmutable-y-top-k.js
 *
 * ¡CUIDADO CON .sort()!
 * `arreglo.sort()` MODIFICA el arreglo original.
 * Para ordenar sin alterar el arreglo original, crea primero una copia:
 *   const ordenado = [...arreglo].sort((a, b) => b - a);
 *
 * RECETA DE 4 PASOS PARA CONSTRUIR UN "TOP K":
 *   Paso 1: Agrupar totales en un diccionario `{ nombre: total }` con `.reduce()`.
 *   Paso 2: Convertir el diccionario en un arreglo de pares `[nombre, total]`
 *           usando `Object.entries(diccionario)`.
 *   Paso 3: Ordenar los pares de mayor a menor según su valor (`par[1]`):
 *           `.sort((a, b) => b[1] - a[1])`.
 *   Paso 4: Recortar los primeros `k` con `.slice(0, k)` y extraer solo el nombre
 *           con `.map(([nombre]) => nombre)`.
 */

// Datos de ejemplo (Descargas de videojuegos en una tienda digital)
const comprasJuegos = [
  { orden: 1, juego: "Hollow Knight", copias: 3, precio: 30000 },
  { orden: 2, juego: "Elden Ring", copias: 2, precio: 150000 },
  { orden: 3, juego: "Stardew Valley", copias: 4, precio: 25000 },
  { orden: 4, juego: "Hollow Knight", copias: 2, precio: 30000 },
  { orden: 5, juego: "Celeste", copias: 1, precio: 40000 },
  { orden: 6, juego: "Balatro", copias: 3, precio: 35000 },
];

const montoCompra = (c) => c.copias * c.precio;

// ----------------------------------------------------------------------------
// 1. ORDENAR UN ARREGLO DE OBJETOS SIN MODIFICAR EL ORIGINAL
// ----------------------------------------------------------------------------
function ordenarComprasPorMonto(listaCompras) {
  return [...listaCompras].sort((a, b) => montoCompra(b) - montoCompra(a));
}

// ----------------------------------------------------------------------------
// 2. PATRÓN TOP K DE JUEGOS QUE MÁS DINERO RECAUDARON (SOLO NOMBRES)
// ----------------------------------------------------------------------------
function topJuegosPorRecaudo(listaCompras, k) {
  // Paso 1: Agrupar cuánto dinero generó cada juego en un diccionario
  const recaudoPorJuego = listaCompras.reduce((diccionario, compra) => {
    if (compra.copias <= 0) return diccionario;

    const titulo = compra.juego;
    diccionario[titulo] = (diccionario[titulo] || 0) + montoCompra(compra);
    return diccionario;
  }, {});

  // Paso 2: Object.entries convierte el diccionario en pares [titulo, totalDinero]
  // Paso 3: .sort((a, b) => b[1] - a[1]) ordena de mayor a menor dinero
  // Paso 4: .slice(0, k) toma los primeros k y .map(([titulo]) => titulo) deja solo el nombre
  return Object.entries(recaudoPorJuego)
    .sort((parA, parB) => parB[1] - parA[1])
    .slice(0, k)
    .map(([titulo]) => titulo);
}

console.log("=== DEMOSTRACIÓN: ORDENAMIENTO INMUTABLE Y TOP K ===");
const comprasOrdenadas = ordenarComprasPorMonto(comprasJuegos);
console.log("Compra más alta tras ordenar :", comprasOrdenadas[0]);
console.log("Primera compra en el original:", comprasJuegos[0], "(sigue siendo orden 1)");
console.log("\nTop 3 juegos por recaudo (solo nombres):", topJuegosPorRecaudo(comprasJuegos, 3));
console.log("Top 2 juegos por recaudo (solo nombres):", topJuegosPorRecaudo(comprasJuegos, 2));
