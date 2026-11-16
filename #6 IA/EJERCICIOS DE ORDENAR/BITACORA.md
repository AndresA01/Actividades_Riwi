# Registro de actividad: ordenamiento de tres números

## 1. Objetivo de la actividad

Diseñar y comparar algoritmos que permitan ordenar tres números enteros de menor a mayor. La solución debe funcionar con diferentes valores, incluidos números repetidos, negativos y entradas que ya estén ordenadas.

## 2. Mi solución: `ordenar-numeros.py`

Mi algoritmo solicita tres números (`num1`, `num2` y `num3`) y utiliza una estructura de seis condiciones `if` / `elif` para contemplar los posibles órdenes entre ellos.

Cada condición comprueba una combinación de relaciones entre los tres números y, cuando encuentra la que corresponde, muestra los valores de menor a mayor.

**Características de mi solución:**
- Utiliza comparaciones encadenadas, por ejemplo: `num1 <= num2 <= num3`.
- Contempla los seis órdenes posibles de tres valores.
- Escribe directamente el orden correspondiente en cada condición.
- No utiliza intercambios de variables; determina qué valor debe imprimirse primero, segundo y tercero.

## 3. Soluciones propuestas por IA

Se revisaron dos alternativas generadas con asistentes de IA:

- `ordenar-cloude.py`: utiliza condiciones `if` anidadas para comparar primero dos números y después determinar la posición del tercero.
- `ordenar-chat.py`: también utiliza condiciones anidadas, pero comienza identificando cuál de los tres números es el menor y luego ordena los dos restantes.

**Comparación de la estructura:**

| Solución | Estrategia principal | Estructura condicional |
|---|---|---|
| Mi algoritmo | Comprueba directamente los seis órdenes posibles. | `if` y `elif` |
| Solución de IA 1 | Compara dos valores y continúa con comparaciones anidadas. | `if` anidados |
| Solución de IA 2 | Identifica primero el menor y después compara los otros dos. | `if` anidados y condiciones compuestas |

## 4. Registro de pruebas

Se utilizaron los mismos casos de prueba para comprobar las tres soluciones. El resultado esperado corresponde a los números ordenados de menor a mayor.

| Caso de prueba | Entrada | Resultado esperado | Mi algoritmo | IA 1 (Claude) | IA 2 (ChatGPT) |
|---|---:|---:|:---:|:---:|:---:|
| Desordenados | 7, 2, 5 | 2, 5, 7 | ✅ | ✅ | ✅ |
| Desordenados al revés | 9, 5, 1 | 1, 5, 9 | ✅ | ✅ | ✅ |
| Números repetidos | 5, 1, 5 | 1, 5, 5 | ✅ | ✅ | ✅ |
| Números negativos | -3, 5, -1 | -3, -1, 5 | ✅ | ✅ | ✅ |
| Todos iguales | 4, 4, 4 | 4, 4, 4 | ✅ | ✅ | ✅ |

**Resultado de las pruebas:** las tres soluciones producen el resultado esperado en los cinco casos evaluados.

## 5. Análisis y reflexión personal

Al revisar los dos algoritmos generados por IA, observo que ambos utilizan estructuras de condiciones anidadas (`if` dentro de otros `if`). Sin embargo, no siguen exactamente el mismo procedimiento: una solución comienza comparando los dos primeros números, mientras que la otra busca primero cuál es el menor.

Mi algoritmo tiene una estructura diferente, porque utiliza seis condiciones `if` / `elif` para contemplar directamente los posibles órdenes de los tres números.

Esta comparación me permitió reconocer que un mismo problema puede resolverse mediante distintas estrategias de programación. Aunque las tres soluciones superaron las pruebas realizadas, la forma de organizar las condiciones, la claridad del código y la facilidad para comprenderlo también son aspectos importantes al desarrollar un algoritmo.

## 6. Conclusión

La actividad permitió practicar el uso de variables, operadores relacionales y estructuras condicionales en Python. También mostró la importancia de probar un algoritmo con diferentes entradas antes de considerar que funciona correctamente.

Las soluciones de IA sirvieron como referencia para comparar otras maneras de resolver el problema, pero fue necesario revisar su lógica y comprobar sus resultados mediante casos de prueba.

---

## Archivos relacionados

- `ordenar-numeros.py`: solución desarrollada por mí.
- `ordenar-cloude.py`: solución generada con Claude.
- `ordenar-chat.py`: solución generada con ChatGPT.
- `registro.md`: registro de pruebas, comparación y reflexión de la actividad.
