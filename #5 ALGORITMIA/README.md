# Algoritmia y fundamentos de programación

Este repositorio reúne los ejercicios desarrollados durante las **semanas 1, 2 y 3** del proceso de aprendizaje de algoritmia y programación. El material incluye algoritmos escritos en **PSeInt** (`.psc`) y ejercicios implementados en **JavaScript** (`.js`).

Los ejercicios trabajan progresivamente la construcción de algoritmos: desde instrucciones secuenciales y operaciones básicas hasta condiciones, operadores lógicos, ciclos, arreglos, funciones y manejo de objetos.

## Contenido

- [Semana 1: fundamentos y secuencia](#semana-1--fundamentos-y-secuencia)
- [Semana 2: condiciones y lógica](#semana-2--condiciones-y-lógica)
- [Semana 3: ciclos, arreglos y funciones en JavaScript](#semana-3--ciclos-arreglos-y-funciones-en-javascript)
- [Temas trabajados](#temas-trabajados)

---

## Semana 1 – Fundamentos y secuencia

En esta primera semana se desarrollaron ejercicios introductorios para comprender la estructura de un algoritmo, el orden de ejecución de instrucciones, la entrada y salida de datos, las operaciones aritméticas y las decisiones básicas.

### Ejercicio 1: preparar limonada

**Archivo:** [`semana1/ejercicio1.psc`](./semana1/ejercicio1.psc)

Describe de manera ordenada el procedimiento para preparar una limonada: tomar un vaso limpio, cortar y exprimir dos limones, agregar azúcar y agua, mezclar durante 30 segundos y servir. Es un ejemplo de **estructura secuencial**, porque las instrucciones se ejecutan en el orden establecido, sin solicitar datos ni tomar decisiones.

### Ejercicio 2: calcular el área de un rectángulo

**Archivo:** [`semana1/ejercicio2.psc`](./semana1/ejercicio2.psc)

Solicita la base y la altura de un rectángulo, realiza la multiplicación y presenta el área obtenida. Aplica la fórmula:

`área = base × altura`

Permite practicar la declaración de variables, la lectura de datos, las operaciones matemáticas y la salida de resultados.

### Ejercicio 3: verificar un número

**Archivo:** [`semana1/ejercicio3.psc`](./semana1/ejercicio3.psc)

Lee un número y determina si es positivo, negativo o igual a cero. Para clasificarlo utiliza una **estructura condicional anidada** (`Si`, `Sino`), comparando el valor ingresado con cero.

### Ejercicio 4: calcular propina y dividir la cuenta

**Archivo:** [`semana1/ejercicio4.psc`](./semana1/ejercicio4.psc)

Solicita el valor de la cuenta, el porcentaje de propina y el número de personas. Calcula el monto de la propina y el total con propina. Si el número de personas es mayor que cero, divide el total para obtener cuánto debe pagar cada una; de lo contrario, muestra un mensaje de error.

### Ejercicios complementarios de Moodle

#### Ejercicio Moodle 1: calcular la edad en días

**Archivo:** [`semana1/ejerciciodemoodle.psc`](./semana1/ejerciciodemoodle.psc)

Solicita la edad de una persona en años y calcula una aproximación de su edad en días multiplicando el valor ingresado por 365.

`edad en días = edad en años × 365`

#### Ejercicio Moodle 2: calculadora de propinas

**Archivo:** [`semana1/ejerciciomoodle2.psc`](./semana1/ejerciciomoodle2.psc)

Solicita el valor de la cuenta, el porcentaje de propina y la cantidad de personas. Calcula la propina total, la suma de la cuenta con la propina y el valor que corresponde a cada persona. La condición implementada en el archivo es `personas < 0`.

#### Ejercicio Moodle 3: operación con cantidad de estudiantes y notas

**Archivo:** [`semana1/ejerciciomoodle3.psc`](./semana1/ejerciciomoodle3.psc)

Solicita la cantidad de estudiantes y la cantidad de notas por estudiante. Multiplica ambos valores y muestra el resultado bajo el mensaje «El promedio es». El algoritmo implementado realiza esa multiplicación.

---

## Semana 2 – Condiciones y lógica

Durante esta semana se trabajaron las estructuras de decisión, los operadores lógicos, la selección de casos y la evaluación de condiciones y límites.

### Ejercicio 1: reglas de descuento

**Archivo:** [`semana2/ejercicio1.psc`](./semana2/ejercicio1.psc)

Pregunta si el cliente es VIP y si tiene un cupón de descuento. Convierte las respuestas `S` o `s` en valores lógicos verdaderos y las demás respuestas en falsos. Después utiliza el operador lógico **O** para determinar si aplica el descuento: basta con que se cumpla una de las dos condiciones.

### Ejercicio 2: validar acceso con las leyes de De Morgan

**Archivo:** [`semana2/ejercicio2.psc`](./semana2/ejercicio2.psc)

Solicita la edad y pregunta si la persona cuenta con autorización de sus padres. El acceso se deniega cuando la persona es menor de 18 años y no tiene autorización:

`edad < 18 Y NO tienePermiso`

En los demás casos se permite el acceso. El ejercicio aplica operadores lógicos y la negación de una condición de autorización.

### Ejercicio 3: tarifas del parqueadero

**Archivo:** [`semana2/ejercicio3.psc`](./semana2/ejercicio3.psc)

Solicita el tipo de vehículo y las horas de estacionamiento. Mediante una estructura **Según** selecciona la tarifa correspondiente:

- Automóvil: `$2.000` por hora.
- Moto: `$1.000` por hora.
- Bicicleta: estacionamiento gratuito.

Si se ingresa una opción diferente de 1, 2 o 3, muestra un mensaje de opción no válida.

### Ejercicio 4: semáforo de inventario

**Archivo:** [`semana2/ejercicio4.psc`](./semana2/ejercicio4.psc)

Lee la cantidad disponible de productos y clasifica el inventario mediante condiciones encadenadas:

- `stock <= 0`: crítico, sin existencias.
- `1 a 10`: bajo.
- `11 a 49`: medio.
- `50 o más`: óptimo.

Se evalúan los límites de cada rango para asignar el estado correspondiente.

### Ejercicio 4.2: verificar si un año es bisiesto

**Archivo:** [`semana2/ejercio4.2.psc`](./semana2/ejercio4.2.psc)

Solicita un año y aplica la regla del calendario gregoriano para determinar si es bisiesto. La condición comprueba si el año es divisible por 4 y no por 100, o si es divisible por 400:

`(año MOD 4 = 0 Y año MOD 100 <> 0) O (año MOD 400 = 0)`

---

## Semana 3 – Ciclos, arreglos y funciones en JavaScript

En esta semana los ejercicios se desarrollaron en **JavaScript**. Se practicaron ciclos para repetir instrucciones, arreglos para almacenar datos, funciones para organizar operaciones y objetos para agrupar información.

Los programas utilizan cuadros de diálogo del navegador (`prompt` y `alert`). El ejercicio de la pirámide también presenta su resultado en la consola del navegador.

### Ejercicio 1: simulación de un cajero automático

**Archivo:** [`semana3/ejercicio1.js`](./semana3/ejercicio1.js)

Simula varios retiros de dinero. Solicita un monto inicial y, mientras sea mayor que cero, lo acumula en el total retirado y aumenta el contador de transacciones. Cuando se ingresa cero o un valor negativo, finaliza el ciclo y muestra el total retirado y la cantidad de retiros realizados.

**Conceptos trabajados:** variables, acumuladores, contadores, conversión de datos y ciclo `while`.

### Ejercicio 2: análisis de calificaciones

**Archivo:** [`semana3/ejercicio2.js`](./semana3/ejercicio2.js)

Solicita la cantidad de calificaciones que se van a registrar. Si la cantidad no es válida o no es mayor que cero, muestra un mensaje y termina la función. Después solicita las notas y las almacena en un arreglo. Recorre los datos para calcular la nota máxima, la mínima, la suma, el promedio y la cantidad de estudiantes aprobados.

El criterio de aprobación implementado es una calificación igual o superior a `3.0`. El promedio se presenta con dos decimales. El programa no establece una validación de rango para cada nota ingresada.

**Conceptos trabajados:** arreglos, ciclo `for`, condicionales, acumuladores, comparación de valores y promedio.

### Ejercicio 3: generar una pirámide de asteriscos

**Archivo:** [`semana3/ejercicio3.js`](./semana3/ejercicio3.js)

Solicita la cantidad de pisos de una pirámide y comprueba que sea un número entero positivo. Utiliza ciclos anidados para construir cada fila: primero agrega los espacios necesarios para centrarla y después incorpora una cantidad impar de asteriscos.

La pirámide se construye como una cadena de texto y se muestra en la consola del navegador.

**Conceptos trabajados:** ciclos `for` anidados, validación de entrada, construcción de cadenas y salida por consola.

### Ejercicio 4: calcular una factura de consumo

**Archivo:** [`semana3/ejercicio4.js`](./semana3/ejercicio4.js)

Permite registrar varios platos o bebidas. Para cada producto solicita el nombre, el precio y la cantidad, y almacena esos datos como un objeto dentro de un arreglo. El registro continúa mientras la respuesta sea `si` o `s`.

El cálculo se organiza mediante funciones:

- `ComponenteItemLista(items)`: suma el valor de cada producto (`precio × cantidad`) para obtener el subtotal.
- `ComponenteImpuestos(montoBase)`: calcula un impuesto del 8 % sobre el subtotal.
- `ComponentePropina(montoBase)`: calcula una propina sugerida del 10 % sobre el subtotal.
- `ComponenteFacturaRaiz()`: coordina el registro de productos y presenta el desglose de la factura.

El total a pagar corresponde a la suma del subtotal, el impuesto y la propina. El ejercicio no valida los valores numéricos ingresados para el precio y la cantidad.

**Conceptos trabajados:** funciones, parámetros, retorno de valores, arreglos, objetos, ciclo `while`, condicionales y operaciones aritméticas.

---

## Temas trabajados

A lo largo de las tres semanas se han abordado los siguientes fundamentos:

| Área | Contenidos y herramientas |
|---|---|
| Fundamentos de algoritmia | Secuencia de instrucciones, entrada, proceso y salida de datos |
| Variables y tipos de datos | Enteros, reales, caracteres y valores lógicos |
| Operadores | Operaciones aritméticas, comparaciones, `Y`, `O` y `NO` |
| Condicionales | `Si`, `Sino`, condicionales anidadas y selección `Según` |
| Ciclos | `while` y `for`, incluidos ciclos anidados |
| Estructuras de datos | Arreglos y objetos en JavaScript |
| Organización del código | Funciones, parámetros y valores de retorno |
| Procesamiento de información | Acumuladores, contadores, promedios, máximos y mínimos |

## Organización de archivos

Los enlaces de este documento siguen la organización por carpetas y nombres de archivo utilizada para el repositorio:

```text
.
├── README.md
├── semana1/
│   ├── ejercicio1.psc
│   ├── ejercicio2.psc
│   ├── ejercicio3.psc
│   ├── ejercicio4.psc
│   ├── ejerciciodemoodle.psc
│   ├── ejerciciomoodle2.psc
│   └── ejerciciomoodle3.psc
├── semana2/
│   ├── ejercicio1.psc
│   ├── ejercicio2.psc
│   ├── ejercicio3.psc
│   ├── ejercicio4.psc
│   └── ejercio4.2.psc
└── semana3/
    ├── ejercicio1.js
    ├── ejercicio2.js
    ├── ejercicio3.js
    └── ejercicio4.js
```

---
