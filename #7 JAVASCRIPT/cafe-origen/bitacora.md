# Bitácora de Análisis - Café Origen v0.1

## 1. Diccionario de datos (Minirreto 1)

| Propiedad | Tipo de dato | Significado |
| :--- | :--- | :--- |
| `id` | Número | Identificador de la venta |
| `fecha` | Texto | Fecha de la venta |
| `cliente` | Texto | Identificador del cliente |
| `producto` | Texto | Producto vendido |
| `ciudad` | Texto | Ciudad de la venta |
| `cantidad` | Número | Unidades vendidas |
| `precio` | Número | Precio por unidad |

---

## 2. Casos borde detectados en los datos (Minirreto 1)

### Hallazgo 1:
- **Descripción**: Medellín aparece como `"Medellín"` y `"medellín"`.
- **¿Cómo se debe tratar en el análisis?**: Normalizar con `.trim().toLowerCase()` para agruparlas como una ciudad.

### Hallazgo 2:
- **Descripción**: La venta con ID 8 tiene cantidad 0.
- **¿Cómo se debe tratar en el análisis?**: Excluirla de indicadores y agrupaciones de ventas válidas.

---

## 3. Patrones con ciclos manuales (Minirreto 2)

- **`totalVendido(ventas)`**:
  - *Patrón usado (contador, acumulador, filtro, extremo)*: Acumulador; suma `cantidad * precio` si `cantidad > 0`.
- **`totalUnidades(ventas)`**:
  - *Patrón usado*: Acumulador de unidades válidas.
- **`ventaMayorValor(ventas)`**:
  - *Patrón usado*: Inicia el máximo en `null` y compara el valor de cada venta válida.
- **`ventasDeCiudad(ventas, ciudad)`**:
  - *Patrón usado*: Filtro manual con `for...of`; normaliza ciudad y excluye cantidad 0.
- **`promedioPorVenta(ventas)`**:
  - *Patrón usado*: Acumula valor y cuenta ventas válidas; devuelve 0 si no hay ventas válidas.

---

## 4. Del ciclo al método: Preguntas de transformación y agrupación (Minirreto 3)

- **¿Qué filtro? (`.filter`)**: Ventas con `cantidad > 0`.
- **¿Qué transformo? (`.map`)**: Cada venta válida en `{ id, producto, ciudad, total }`, con ciudad en minúsculas.
- **¿Qué reduzco / acumulo? (`.reduce`)**: Totales por ciudad, unidades por producto y valor por producto.
- **¿Cómo agrupo en un diccionario?**: Uso la ciudad normalizada o el producto como clave y acumulo su valor o unidades.
- **¿Cómo ordeno sin modificar el arreglo original? (`.sort`)**: Ordeno las entradas nuevas de `Object.entries()` por valor descendente; luego aplico `.slice()` y `.map()`.

---

## 5. Verificación del reporte y pureza de funciones (Minirreto 4)

- **¿Cómo comprobaste que el arreglo `ventas` original no fue modificado?**: Ejecuté el reporte; confirmó 12 registros y que el primer ID sigue siendo 1. Las funciones no modifican las ventas.
- **Comando para ejecutar el reporte**: `node src/reporte.js`
