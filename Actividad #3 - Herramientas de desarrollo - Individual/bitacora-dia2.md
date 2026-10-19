# Bitácora · Día 2 · Herramientas de desarrollo

- **Coder: Andres Acevedo**
- **Fecha: 19/10/2026**
- **TL: Johan Rivera**

---

## 1. Mi entorno de desarrollo (Etapa 1)

- Versión de Mind: 22.3
- Versión de Python: 3.12.3
- ¿Dónde está instalado Python? (resultado de `which python3`): usr/bin/python3
- Con mis palabras, la diferencia entre un compilador y un intérprete es: El compilador traduce todo el código dando como resultado un aplicativo y el interprete va leyendo y traduciendo el código línea por línea.
- ¿Qué pasó con la línea 4 de `hola.py` y por qué?: No se ejecuto correctamente debidor a un error en la impresion del mensaje ya que como este no estaba dentro de comillas se tomó como una variable y al esta estar vacia ocurrio un error que indica que la variable en cuestion no está definida.

| Herramienta | ¿Qué es? (sistema operativo, editor, intérprete, compilador o navegador) |
|---|---|
| Ubuntu |Sistema operativo|
| VS Code |Editor|
| Python |Intérprete|
| Chrome |Navegador|
| gcc |Compilador|

## 2. Reinstalación de VS Code (Etapa 2)

- ¿Cómo estaba instalado VS Code? (snap, .deb o no estaba): vscode no estaba instalado en mi equipo.
- Comando que usé para desinstalarlo: N/A
- Comando que usé para instalarlo: En linux mind intente con el comando recomendado en la intrucciones: sudo apt install ./code_*.deb, el cual no funcionó debido un error "se ha suministrado el fichero no admitido ./code_*.deb en la linea de órdenes" por lo cual se realiza la instalación desde la pagina oficial de vscode.
- ¿Por qué es importante instalar desde la fuente oficial?: Ya que así evitamos contraer algún software mal intencionado en nuestro equipo.
- ¿Qué pasó con mi configuración al desinstalar? ¿Dónde vive?: Esta se queda guardada en nuestro directorio dentro de una carpeta oculta nombrada (config) con la siguiente ruta ~/.config/code.

## 3. Perfiles y extensiones (Etapa 3)

- Con mis palabras, un perfil de VS Code es:
- ¿Qué cambia en el Explorador entre un perfil y otro?:
- ¿Por qué VS Code pregunta si confío en el publicador de una extensión?:

## 4. Duelo de perfiles (Etapa 4)

| Prueba | Perfil2-Basico | Perfil1-Pro |
|---|---|---|
| 1. Auto guardado | | |
| 2. Auto Rename Tag | | |
| 3. Error Lens | | |
| 4. Íconos | | |
| 5. Guías de indentación | | |
| 6. Extensiones corriendo | | |

**Reflexión**

1. ¿Noté diferencias en la experiencia de trabajo entre los dos perfiles? ¿Cuáles?
   -
2. ¿Qué ventajas tiene usar múltiples perfiles en VS Code?
   -
3. ¿Cómo influyen las extensiones en la productividad y en el rendimiento del editor?
   -
4. ¿Cuándo sería útil usar perfiles distintos en un entorno profesional? (dos ejemplos)
   -

## 5. Inspección y modificación (Etapa 5)

- Página que usé:
- Cinco etiquetas que encontré y para qué sirven:
  1.
  2.
  3.
  4.
  5.
- ¿Qué pasó con mis cambios al recargar y por qué?:
- Con mis palabras, el DOM es:

## 6. La consola (Etapa 6)

| Operación | Mi predicción | Resultado real |
|---|---|---|
| `2 + 3` | | |
| `10 - 4 * 2` | | |
| `(10 - 4) * 2` | | |
| `10 / 4` | | |
| `10 % 3` | | |
| `2 ** 8` | | |
| `120000 * 0.19` | | |
| `365 * 24` | | |

- ¿Por qué `0.1 + 0.2` no da exactamente `0.3`?:
- Errores o advertencias que encontré en la página (o "ninguno"):
- Diferencia entre un error y una advertencia:

## 7. La red / Network (Etapa 7)

| Imagen | Formato | Tamaño | Tiempo | Código de estado |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

| Experimento | Solicitudes | Transferido | Load |
|---|---|---|---|
| A. Sin caché | | | |
| B. Con caché | | | |
| C. Red lenta | | | |

- Archivo más pesado de la página y su tipo:
- ¿Por qué la página cargó más rápido con caché?:
- ¿Por qué un desarrollador querría probar con una red lenta?:
- ¿Qué haría para que una imagen pesada cargue más rápido?:

## 8. Dispositivos móviles (Etapa 8)

| Ancho (px) | Dispositivo | ¿Cambia el menú? | ¿Imágenes bien? | ¿Scroll horizontal? | Observación |
|---|---|---|---|---|---|
| 320 | | | | | |
| 375 | | | | | |
| 768 | | | | | |
| 1024 | | | | | |
| 1440 | | | | | |

- ¿Por qué es importante probar varias resoluciones antes de entregar un proyecto?:

## 9. Laboratorio de errores (Etapa 9)

| # | Tipo | ¿Dónde lo detecté? | Mensaje o síntoma | Causa | Solución aplicada |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |

- Uno de los errores, descrito con detalle, y cómo lo resolví:
- ¿Qué vi al pausar con el breakpoint?:
- ¿Qué pasó al cambiar `visitas` por 99 y al borrarlo?:
- ¿Para qué usan el localStorage las páginas reales? ¿Qué NO debería guardar ahí?:
- Ancho exacto en el que se apilan las tarjetas y regla de CSS responsable:
- ¿Por qué no basta con mirar solo la consola para encontrar errores?:

## 10. Comparación con Firefox (Etapa 10)

| Herramienta | Chrome: nombre y atajo | Firefox: nombre y atajo | Diferencia que noté |
|---|---|---|---|
| Inspeccionar HTML y CSS | | | |
| Consola | | | |
| Red | | | |
| Simulación de dispositivos | | | |
| Almacenamiento local | | | |
| Mensaje del error que reintroduje | | | |

- Una característica de Firefox interesante o diferente a Chrome (qué es, para qué sirve y cómo la probé):

## 11. Reflexión final (Etapa 11)

- La herramienta que más voy a usar y por qué:
- Lo más difícil del día y cómo lo resolví:
- Las DevTools explicadas para alguien que no programa (3 líneas):
