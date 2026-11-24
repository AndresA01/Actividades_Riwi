/**
 * ============================================================================
 * GUÍA DE PATRÓN 01: CONTADORES, ACUMULADORES Y PROMEDIOS
 * ============================================================================
 * Ejecuta este archivo con: node patrones/01-contadores-y-acumuladores.js
 *
 * ¿CUÁNDO USARLOS?
 * - CONTADOR: Cuando la pregunta empieza por "¿Cuántos...?" o "¿Cuántas veces...?"
 *   Suma de 1 en 1 (`contador += 1`) cada vez que se cumple una condición.
 *
 * - ACUMULADOR: Cuando la pregunta empieza por "¿Cuánto suma en total...?"
 *   Suma una cantidad variable (`acumulador += elemento.valor`) en cada paso.
 *
 * - PROMEDIO: Combina un ACUMULADOR (la suma de valores) dividido entre un
 *   CONTADOR (la cantidad de elementos válidos).
 */

// Datos de ejemplo (Cursos vendidos en una academia online)
const inscripciones = [
  { id: 101, curso: "JavaScript desde Cero", sede: "Norte", cupos: 3, costoUnitario: 50000 },
  { id: 102, curso: "HTML y CSS", sede: "Sur", cupos: 2, costoUnitario: 35000 },
  { id: 103, curso: "Node.js Práctico", sede: "norte", cupos: 0, costoUnitario: 60000 }, // Caso borde: 0 cupos
  { id: 104, curso: "JavaScript desde Cero", sede: "Norte", cupos: 4, costoUnitario: 50000 },
  { id: 105, curso: "Bases de Datos SQL", sede: "Centro", cupos: 1, costoUnitario: 45000 },
];

const costoTotalInscripcion = (item) => item.cupos * item.costoUnitario;

// ----------------------------------------------------------------------------
// 1. PATRÓN CONTADOR (+1 cuando cumple condición)
// ----------------------------------------------------------------------------
function contarInscripcionesEnNorte(lista) {
  let contador = 0;

  for (const registro of lista) {
    // Normalizamos con .toLowerCase() y verificamos que tenga cupos > 0
    if (registro.sede.trim().toLowerCase() === "norte" && registro.cupos > 0) {
      contador += 1; // Suma siempre 1 por cada coincidencia
    }
  }

  return contador;
}

// ----------------------------------------------------------------------------
// 2. PATRÓN ACUMULADOR (+valor variable en cada paso)
// ----------------------------------------------------------------------------
function sumarRecaudoTotal(lista) {
  let acumuladorDinero = 0;

  for (const registro of lista) {
    if (registro.cupos > 0) {
      acumuladorDinero += costoTotalInscripcion(registro);
    }
  }

  return acumuladorDinero;
}

// ----------------------------------------------------------------------------
// 3. PATRÓN COMBINADO: ACUMULADOR + CONTADOR (Promedio seguro)
// ----------------------------------------------------------------------------
// Nota: No dividimos entre `lista.length` porque hay un registro con `cupos: 0`.
function promedioPorInscripcionValida(lista) {
  let sumaDinero = 0; // Acumulador
  let cantidadValidas = 0; // Contador

  for (const registro of lista) {
    if (registro.cupos > 0) {
      sumaDinero += costoTotalInscripcion(registro);
      cantidadValidas += 1;
    }
  }

  if (cantidadValidas === 0) return 0; // Evita dividir 0 / 0
  return sumaDinero / cantidadValidas;
}

// Demostración en consola
console.log("=== DEMOSTRACIÓN: CONTADORES Y ACUMULADORES ===");
console.log("1. Contador (inscripciones válidas en sede Norte):", contarInscripcionesEnNorte(inscripciones));
console.log("2. Acumulador (recaudo total)                    :", sumarRecaudoTotal(inscripciones));
console.log("3. Promedio por inscripción válida               :", promedioPorInscripcionValida(inscripciones));
