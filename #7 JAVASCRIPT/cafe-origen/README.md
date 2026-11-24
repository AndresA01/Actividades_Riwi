# ☕ Café Origen v0.1 — Motor de Analítica de Ventas

Bienvenido al proyecto de analítica de datos de **Café Origen**. En este espacio de trabajo construirás desde cero el motor encargado de procesar, limpiar, agrupar y resumir una muestra real de ventas del mes de septiembre, generando un reporte completo por consola y documentando tus hallazgos técnicos.

---

## 🎯 ¿Cuál es el reto?

El objetivo principal es transformar una muestra cruda de **12 registros de ventas** (`src/datos.js`) en indicadores confiables para el negocio. Como suele ocurrir con los datos en el mundo real, la muestra contiene **casos borde** (como diferencias entre mayúsculas/minúsculas en los nombres de las ciudades o registros con cantidades en cero) que tus funciones deberán detectar y manejar adecuadamente sin alterar los datos originales.

El reto está dividido en **4 minirretos progresivos**:

### 🔍 Minirreto 1: Exploración de datos y detección de casos borde
1. Explora el archivo `src/datos.js` para conocer la estructura de cada registro de venta.
2. Ejecuta el reporte inicial en consola para observar los datos de partida.
3. Completa las secciones **1** (*Diccionario de datos*) y **2** (*Casos borde detectados*) en el archivo `bitacora.md`.
4. Implementa la función base `valorVenta(venta)` en `src/analitica.js`, que calcula el total de una venta individual (`cantidad * precio`).

### 🔄 Minirreto 2: Indicadores básicos con ciclos manuales (`for...of`)
Antes de usar métodos avanzados de JavaScript, construirás la lógica fundamental recorriendo el arreglo manualmente con ciclos **`for...of`** (sin usar `.filter()`, `.map()` ni `.reduce()`):
- **`totalVendido(ventas)`**: Suma el dinero total de todas las ventas válidas (`cantidad > 0`).
- **`totalUnidades(ventas)`**: Suma el total de unidades vendidas en las órdenes válidas.
- **`ventaMayorValor(ventas)`**: Encuentra y devuelve el **objeto completo** de la venta con el mayor valor total.
- **`ventasDeCiudad(ventas, ciudad)`**: Devuelve un nuevo arreglo con las ventas válidas de una ciudad específica, sin importar si está escrita en mayúsculas o minúsculas (ej. `"Medellín"` vs `"medellín"`).
- **`promedioPorVenta(ventas)`**: Calcula el ticket promedio dividiendo el total vendido **únicamente** entre la cantidad de ventas válidas.
- Documenta en la sección **3** de `bitacora.md` qué patrón empleaste en cada función.

### ⚡ Minirreto 3: Métodos de arreglo, diccionarios y rankings (`Top K`)
En esta etapa darás el salto hacia un estilo declarativo utilizando métodos de arreglos (`.filter()`, `.map()`, `.reduce()`, `.sort()`, `.slice()`) y objetos como diccionarios:
- **`ventasValidas(ventas)`**: Filtra y devuelve un nuevo arreglo solo con las ventas cuya `cantidad > 0`.
- **`resumenVentas(ventas)`**: Transforma cada venta válida en un objeto resumido `{ id, producto, ciudad, total }`, con la `ciudad` normalizada en minúsculas.
- **`totalPorCiudad(ventas)`**: Agrupa y suma en un objeto diccionario el dinero total vendido por cada ciudad normalizada (ej. `{ medellín: 356000, bogotá: 276000, ... }`).
- **`unidadesPorProducto(ventas)`**: Agrupa y suma en un diccionario el total de unidades vendidas por cada nombre de producto.
- **`topProductosPorValor(ventas, k)`**: Devuelve un arreglo con los nombres de los `k` productos que más dinero generaron, ordenados de mayor a menor recaudo.
- Responde las preguntas de diseño en la sección **4** de `bitacora.md`.

### 🛡️ Minirreto 4: Verificación del reporte y pureza de funciones
1. Ejecuta el reporte completo y verifica que todas las funciones entreguen resultados coherentes.
2. Comprueba la **inmutabilidad**: ninguna de tus funciones debe haber modificado el arreglo `ventas` original (debe conservar sus 12 elementos en el mismo orden inicial).
3. Completa la sección **5** de `bitacora.md`.

---

## 📁 Estructura del proyecto

```text
.
├── bitacora.md                              # Documento donde registras tu análisis y respuestas
├── patrones/                                # Documentación ejecutable con guías y ejemplos
│   ├── 01-contadores-y-acumuladores.js      # Guía de contadores, acumuladores y promedios
│   ├── 02-extremos-maximo-minimo.js         # Guía para buscar máximos, mínimos y filtrar con for...of
│   ├── 03-filter-map-reduce.js              # Guía práctica de .filter(), .map() y .reduce()
│   ├── 04-objetos-como-diccionarios.js      # Guía de agrupación por categorías con objetos {}
│   └── 05-ordenar-inmutable-y-top-k.js      # Guía de ordenamiento sin mutar y receta Top K
└── src/
    ├── datos.js                             # Muestra de 12 ventas de Café Origen (NO modificar)
    ├── analitica.js                         # Plantilla donde implementarás las funciones del reto
    └── reporte.js                           # Script que ejecuta tus funciones y muestra resultados
```

---

## 📚 Cómo usar la "documentación" en `patrones/`

La carpeta `patrones/` es tu **manual de consulta interactivo**. En lugar de ser teoría abstracta, cada archivo contiene explicaciones comentadas y **ejemplos de código completamente funcionales** aplicados a otros contextos (una academia online, una transportadora, una librería, una tienda deportiva y una tienda de videojuegos).

Así puedes estudiar la técnica exacta que necesitas e incluso ejecutar cada archivo en la terminal para ver cómo se comporta antes de escribir tu solución en `src/analitica.js`.

### Mapa de consulta: ¿Qué archivo leer para cada parte del reto?

| Archivo en `patrones/` | ¿Qué explica? | Comando para probarlo | ¿En qué funciones te ayuda? |
| :--- | :--- | :--- | :--- |
| **`01-contadores-y-acumuladores.js`** | Cómo contar coincidencias (`+1`), acumular montos variables y calcular promedios seguros ignorando registros en `0`. | `node patrones/01-contadores-y-acumuladores.js` | `totalVendido`<br>`totalUnidades`<br>`promedioPorVenta` |
| **`02-extremos-maximo-minimo.js`** | La "regla de oro" (iniciar el candidato en `null`) para encontrar el objeto mayor/menor y cómo filtrar manualmente normalizando texto (`.trim().toLowerCase()`). | `node patrones/02-extremos-maximo-minimo.js` | `ventaMayorValor`<br>`ventasDeCiudad` |
| **`03-filter-map-reduce.js`** | Cuándo usar `.filter()` (seleccionar), `.map()` (transformar 1 a 1) y `.reduce()` (colapsar en un total) sin alterar el arreglo original. | `node patrones/03-filter-map-reduce.js` | `ventasValidas`<br>`resumenVentas` |
| **`04-objetos-como-diccionarios.js`** | Cómo agrupar y sumar datos por categoría dinámica usando `{}` dentro de `.reduce()` y el patrón `(diccionario[clave] \|\| 0) + valor`. | `node patrones/04-objetos-como-diccionarios.js` | `totalPorCiudad`<br>`unidadesPorProducto` |
| **`05-ordenar-inmutable-y-top-k.js`** | Por qué `.sort()` muta el arreglo, cómo evitarlo con `[...arreglo].sort()` y la receta de 4 pasos (`reduce` → `Object.entries` → `sort` → `slice` + `map`) para armar un Top K. | `node patrones/05-ordenar-inmutable-y-top-k.js` | `topProductosPorValor` |

> **💡 Consejo de estudio:** Antes de programar una función en `src/analitica.js`, abre la guía sugerida en su comentario JSDoc, lee las notas del encabezado y ejecuta ese archivo con `node` para observar la salida en consola.

---

## 🚀 Cómo usar este repositorio paso a paso

Para trabajar en el reto solo necesitas tener **Node.js** disponible en tu entorno y seguir este flujo de trabajo:

### 1. Ejecuta el reporte en su estado inicial
Abre una terminal ubicada en la raíz del proyecto y ejecuta:

```bash
node src/reporte.js
```

Al principio verás que el bloque 1 muestra la exploración básica de las ventas, mientras que los bloques 2 y 3 imprimen `undefined` porque las funciones de `src/analitica.js` aún están vacías.

### 2. Inspecciona los datos y llena el inicio de la bitácora
Revisa el contenido de `src/datos.js`. Observa con atención cada uno de los 12 objetos del arreglo `ventas` para detectar anomalías o casos borde y regístralos en `bitacora.md` (secciones 1 y 2).

### 3. Consulta el patrón, implementa y prueba una función a la vez
En lugar de escribir todas las funciones de golpe, avanza una por una en `src/analitica.js`:
1. Lee la descripción y los parámetros en el bloque de comentarios sobre la función.
2. Revisa y ejecuta el archivo correspondiente dentro de `patrones/`.
3. Escribe tu solución dentro de la función en `src/analitica.js`.
4. Ejecuta `node src/reporte.js` para verificar inmediatamente el resultado en consola.

### 4. Completa la bitácora de análisis
A medida que completes cada minirreto, actualiza `bitacora.md` explicando qué patrones utilizaste y cómo resolviste las transformaciones y agrupaciones.

---

## ⚠️ Reglas importantes del reto

1. **No modifiques `src/datos.js`**: Los datos representan una fuente externa. Cualquier limpieza (descartar cantidades en `0`, normalizar nombres de ciudades con `.trim().toLowerCase()`, etc.) debe hacerse dentro de las funciones de `src/analitica.js`.
2. **Respeta la inmutabilidad**: Tus funciones no deben alterar el arreglo `ventas` original ni modificar sus objetos internos. Ten especial cuidado con métodos mutables como `.sort()`.
3. **Respeta la técnica de cada etapa**:
   - En el **Minirreto 2**, resuelve las funciones usando ciclos `for...of`.
   - En el **Minirreto 3**, resuelve las funciones aplicando métodos de arreglos (`.filter`, `.map`, `.reduce`, `.sort`, `.slice`).
4. **No cambies los nombres de las funciones exportadas**: `src/reporte.js` importa las funciones por su nombre exacto desde `src/analitica.js`.
