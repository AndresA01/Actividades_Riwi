/**
 * ============================================================================
 * GUÍA DE PATRÓN 02: BÚSQUEDA DE EXTREMOS (MÁXIMO Y MÍNIMO)
 * ============================================================================
 * Ejecuta este archivo con: node patrones/02-extremos-maximo-minimo.js
 *
 * ¿CUÁNDO USARLO?
 * Cuando necesitas encontrar "el mayor", "el más caro", "el menor", "el más largo"
 * y quieres devolver EL OBJETO COMPLETO (no solo el número).
 *
 * REGLA DE ORO:
 * Inicializa la variable candidata en `null`.
 * En cada paso compara: si el candidato sigue siendo `null` O el elemento actual
 * supera al candidato, actualiza el candidato con el elemento actual.
 */

// Datos de ejemplo (Envíos de paquetes de una transportadora)
const envios = [
  { guia: "G-01", destino: "Cartagena", cajas: 2, tarifaPorCaja: 18000 },
  { guia: "G-02", destino: "Manizales", cajas: 5, tarifaPorCaja: 15000 },
  { guia: "G-03", destino: "Bucaramanga", cajas: 0, tarifaPorCaja: 25000 }, // Envío cancelado (0 cajas)
  { guia: "G-04", destino: "Santa Marta", cajas: 4, tarifaPorCaja: 22000 },
  { guia: "G-05", destino: "Pasto", cajas: 1, tarifaPorCaja: 19000 },
];

const costoEnvio = (envio) => envio.cajas * envio.tarifaPorCaja;

// ----------------------------------------------------------------------------
// 1. PATRÓN DE MÁXIMO CON FOR...OF
// ----------------------------------------------------------------------------
function envioMasCostoso(listaEnvios) {
  let mayor = null; // Empezamos sin candidato

  for (const envio of listaEnvios) {
    if (envio.cajas <= 0) continue; // Ignoramos envíos en 0

    // Si aún no hay campeón, o si el envío actual cuesta más que el campeón guardado:
    if (mayor === null || costoEnvio(envio) > costoEnvio(mayor)) {
      mayor = envio;
    }
  }

  return mayor;
}

// ----------------------------------------------------------------------------
// 2. PATRÓN DE MÍNIMO CON FOR...OF
// ----------------------------------------------------------------------------
function envioMasEconomicoValido(listaEnvios) {
  let menor = null;

  for (const envio of listaEnvios) {
    if (envio.cajas <= 0) continue;

    // Solo cambia `>` por `<`
    if (menor === null || costoEnvio(envio) < costoEnvio(menor)) {
      menor = envio;
    }
  }

  return menor;
}

// ----------------------------------------------------------------------------
// 3. PATRÓN DE FILTRO MANUAL CON FOR...OF (Construir un nuevo arreglo)
// ----------------------------------------------------------------------------
function filtrarEnviosPorDestino(listaEnvios, ciudadBuscada) {
  const encontrados = [];
  const destinoNormalizado = ciudadBuscada.trim().toLowerCase();

  for (const envio of listaEnvios) {
    if (envio.cajas > 0 && envio.destino.trim().toLowerCase() === destinoNormalizado) {
      encontrados.push(envio);
    }
  }

  return encontrados;
}

console.log("=== DEMOSTRACIÓN: EXTREMOS Y FILTRO MANUAL ===");
console.log("Envío más costoso          :", envioMasCostoso(envios));
console.log("Envío más económico válido :", envioMasEconomicoValido(envios));
console.log("Envíos hacia 'santa marta' :", filtrarEnviosPorDestino(envios, "santa marta"));
