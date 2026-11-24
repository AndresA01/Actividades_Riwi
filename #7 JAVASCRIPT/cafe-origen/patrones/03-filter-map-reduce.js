/**
 * ============================================================================
 * GUÍA DE PATRÓN 03: MÉTODOS DE ARREGLO (.filter, .map, .reduce)
 * ============================================================================
 * Ejecuta este archivo con: node patrones/03-filter-map-reduce.js
 *
 * TABLA RÁPIDA (Cada pregunta con su método):
 * ┌────────────┬──────────────────────────────────────┬─────────────────────────────┐
 * │ Método     │ ¿Para qué sirve?                     │ ¿Qué devuelve?              │
 * ├────────────┼──────────────────────────────────────┼─────────────────────────────┤
 * │ .filter()  │ Quedarse "solo con los que sirven"   │ Nuevo arreglo (<= longitud) │
 * │ .map()     │ Transformar cada elemento 1 a 1      │ Nuevo arreglo (== longitud) │
 * │ .reduce()  │ Reducir todo a un único resultado    │ Número, objeto, arreglo...  │
 * └────────────┴──────────────────────────────────────┴─────────────────────────────┘
 * Importante: Ninguno de estos tres métodos modifica el arreglo original.
 */

// Datos de ejemplo (Pedidos de una librería)
const pedidos = [
  { codigo: "L1", libro: "Clean Code", sucursal: "Centro", ejemplares: 2, precio: 85000 },
  { codigo: "L2", libro: "El Programador Pragmático", sucursal: "Norte", ejemplares: 1, precio: 92000 },
  { codigo: "L3", libro: "Eloquent JavaScript", sucursal: "centro", ejemplares: 0, precio: 68000 },
  { codigo: "L4", libro: "Clean Code", sucursal: "Sur", ejemplares: 3, precio: 85000 },
];

const subtotalPedido = (p) => p.ejemplares * p.precio;

// ----------------------------------------------------------------------------
// 1. FILTER: Seleccionar solo los elementos que cumplen una condición
// ----------------------------------------------------------------------------
// El callback devuelve `true` (se conserva) o `false` (se descarta).
const pedidosValidos = pedidos.filter((pedido) => pedido.ejemplares > 0);

// ----------------------------------------------------------------------------
// 2. MAP: Transformar cada elemento en un nuevo objeto resumido
// ----------------------------------------------------------------------------
// Nota: al devolver un objeto en arrow function corta, usa paréntesis `p => ({ ... })`.
const resumenPedidos = pedidosValidos.map((pedido) => ({
  id: pedido.codigo,
  titulo: pedido.libro,
  sucursalNormalizada: pedido.sucursal.trim().toLowerCase(),
  total: subtotalPedido(pedido),
}));

// ----------------------------------------------------------------------------
// 3. REDUCE: Colapsar el arreglo en un único valor acumulado
// ----------------------------------------------------------------------------
// Estructura:
//   arreglo.reduce((acumulador, elementoActual) => {
//     return nuevoAcumulador;
//   }, valorInicial);
const dineroTotal = pedidosValidos.reduce((acumulador, pedido) => {
  return acumulador + subtotalPedido(pedido);
}, 0);

console.log("=== DEMOSTRACIÓN: FILTER, MAP Y REDUCE ===");
console.log("1. Pedidos válidos (.filter):", pedidosValidos.length, "de", pedidos.length);
console.log("2. Resumen transformado (.map):");
console.table(resumenPedidos);
console.log("3. Total recaudado (.reduce):", dineroTotal);
