/**
 * Reporte de Consola - Café Origen v0.1 (Plantilla Base)
 * Ejecuta este archivo para probar tus funciones: node src/reporte.js
 */
const { ventas } = require("./datos");
const {
  valorVenta,
  totalVendido,
  totalUnidades,
  ventaMayorValor,
  ventasDeCiudad,
  promedioPorVenta,
  ventasValidas,
  resumenVentas,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
} = require("./analitica");

console.log("==============================================================");
console.log("         REPORTE DE ANALÍTICA - CAFÉ ORIGEN v0.1              ");
console.log("==============================================================\n");

// ----------------------------------------------------------------------------
// 1. EXPLORACIÓN INICIAL DE DATOS (Minirreto 1)
// ----------------------------------------------------------------------------
console.log("--- 1. EXPLORACIÓN DE LA MUESTRA (Minirreto 1) ---");
console.log("Cantidad de registros:", ventas.length);
console.log("Primer registro      :", ventas[0]);
console.log("Último registro      :", ventas.at(-1));
console.log();

// ----------------------------------------------------------------------------
// 2. INDICADORES CON CICLOS FOR...OF (Minirreto 2)
// ----------------------------------------------------------------------------
console.log("--- 2. INDICADORES CON CICLOS (Minirreto 2) ---");
console.log("Valor primera venta  :", valorVenta(ventas[0]));
console.log("Total vendido        :", totalVendido(ventas));
console.log("Total unidades       :", totalUnidades(ventas));
console.log("Venta mayor valor    :", ventaMayorValor(ventas));
console.log("Ventas en Medellín   :", ventasDeCiudad(ventas, "Medellín"));
console.log("Promedio por venta   :", promedioPorVenta(ventas));
console.log();

// ----------------------------------------------------------------------------
// 3. AGRUPACIONES Y RANKINGS CON MÉTODOS DE ARREGLO (Minirreto 3)
// ----------------------------------------------------------------------------
console.log("--- 3. AGRUPACIONES Y TOP K CON MÉTODOS (Minirreto 3) ---");
console.log("Ventas válidas       :", ventasValidas(ventas));
console.log("Resumen de ventas    :", resumenVentas(ventas));
console.log("Total por ciudad     :", totalPorCiudad(ventas));
console.log("Unidades por producto:", unidadesPorProducto(ventas));
console.log("Top 3 productos ($)  :", topProductosPorValor(ventas, 3));
console.log();

// ----------------------------------------------------------------------------
// 4. VERIFICACIÓN DE INMUTABILIDAD (Minirreto 4)
// ----------------------------------------------------------------------------
console.log("--- 4. VERIFICACIÓN DEL ARREGLO ORIGINAL (Minirreto 4) ---");
console.log("¿Sigue teniendo 12 registros? :", ventas.length === 12);
console.log("¿El primero sigue siendo ID 1?:", ventas[0].id === 1);
console.log("==============================================================");
