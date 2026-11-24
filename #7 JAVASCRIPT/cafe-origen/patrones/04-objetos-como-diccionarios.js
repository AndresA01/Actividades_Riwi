/**
 * ============================================================================
 * GUÍA DE PATRÓN 04: OBJETOS COMO DICCIONARIOS (AGRUPACIÓN Y FRECUENCIAS)
 * ============================================================================
 * Ejecuta este archivo con: node patrones/04-objetos-como-diccionarios.js
 *
 * ¿QUÉ ES USAR UN OBJETO COMO DICCIONARIO?
 * Cuando necesitas agrupar datos por categoría (sucursal, categoría, vendedor)
 * sin saber de antemano cuáles categorías vienen en el arreglo, usas `{}` donde:
 *   - Cada CLAVE (key) es el nombre de la categoría (ej: "electronica").
 *   - Cada VALOR (value) es el total acumulado de esa categoría (ej: 450000).
 *
 * LA LÍNEA CLAVE:
 *   diccionario[clave] = (diccionario[clave] || 0) + valorASumar;
 *
 * ¿Por qué funciona?
 * - La primera vez que aparece `clave`, `diccionario[clave]` es `undefined`.
 * - El operador `|| 0` convierte ese `undefined` en `0` y le suma `valorASumar`.
 * - En las siguientes apariciones, toma el acumulado existente y le suma `valorASumar`.
 */

// Datos de ejemplo (Tickets de venta de una tienda deportiva)
const tickets = [
  { id: 1, articulo: "Balón de fútbol", sede: "Poblado", cantidad: 2, precio: 60000 },
  { id: 2, articulo: "Guantes de gimnasio", sede: "Laureles", cantidad: 3, precio: 35000 },
  { id: 3, articulo: "Balón de fútbol", sede: "poblado", cantidad: 1, precio: 60000 },
  { id: 4, articulo: "Colchoneta yoga", sede: "Envigado", cantidad: 2, precio: 48000 },
  { id: 5, articulo: "Guantes de gimnasio", sede: "Laureles", cantidad: 0, precio: 35000 },
];

const valorTicket = (t) => t.cantidad * t.precio;

// ----------------------------------------------------------------------------
// 1. AGRUPAR DINERO POR SEDE NORMALIZADA USANDO .reduce()
// ----------------------------------------------------------------------------
function totalVendidoPorSede(listaTickets) {
  return listaTickets.reduce((diccionario, ticket) => {
    if (ticket.cantidad <= 0) return diccionario;

    // Normalizamos la clave para que "Poblado" y "poblado" sumen juntos
    const sedeNormalizada = ticket.sede.trim().toLowerCase();

    diccionario[sedeNormalizada] = (diccionario[sedeNormalizada] || 0) + valorTicket(ticket);
    return diccionario;
  }, {}); // <- Empezamos con un objeto vacío `{}`
}

// ----------------------------------------------------------------------------
// 2. AGRUPAR UNIDADES VENDIDAS POR ARTÍCULO USANDO .reduce()
// ----------------------------------------------------------------------------
function unidadesPorArticulo(listaTickets) {
  return listaTickets.reduce((diccionario, ticket) => {
    if (ticket.cantidad <= 0) return diccionario;

    const nombreArticulo = ticket.articulo;
    diccionario[nombreArticulo] = (diccionario[nombreArticulo] || 0) + ticket.cantidad;
    return diccionario;
  }, {});
}

console.log("=== DEMOSTRACIÓN: OBJETOS COMO DICCIONARIOS ===");
console.log("1. Dinero total por sede (normalizada):", totalVendidoPorSede(tickets));
console.log("2. Unidades totales por artículo       :", unidadesPorArticulo(tickets));
