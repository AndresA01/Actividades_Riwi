# Bitácora de Análisis - Café Origen v0.1

## 1. Diccionario de datos (Minirreto 1)

| Propiedad | Tipo de dato | Significado |
| :--- | :--- | :--- |
| `id` | | |
| `fecha` | | |
| `cliente` | | |
| `producto` | | |
| `ciudad` | | |
| `cantidad` | | |
| `precio` | | |

---

## 2. Casos borde detectados en los datos (Minirreto 1)

### Hallazgo 1:
- **Descripción**:
- **¿Cómo se debe tratar en el análisis?**:

### Hallazgo 2:
- **Descripción**:
- **¿Cómo se debe tratar en el análisis?**:

---

## 3. Patrones con ciclos manuales (Minirreto 2)

- **`totalVendido(ventas)`**:
  - *Patrón usado (contador, acumulador, filtro, extremo)*:
- **`totalUnidades(ventas)`**:
  - *Patrón usado*:
- **`ventaMayorValor(ventas)`**:
  - *Patrón usado*:
- **`ventasDeCiudad(ventas, ciudad)`**:
  - *Patrón usado*:
- **`promedioPorVenta(ventas)`**:
  - *Patrón usado*:

---

## 4. Del ciclo al método: Preguntas de transformación y agrupación (Minirreto 3)

- **¿Qué filtro? (`.filter`)**:
- **¿Qué transformo? (`.map`)**:
- **¿Qué reduzco / acumulo? (`.reduce`)**:
- **¿Cómo agrupo en un diccionario?**:
- **¿Cómo ordeno sin modificar el arreglo original? (`.sort`)**:

---

## 5. Verificación del reporte y pureza de funciones (Minirreto 4)

- **¿Cómo comprobaste que el arreglo `ventas` original no fue modificado?**:
- **Comando para ejecutar el reporte**:
