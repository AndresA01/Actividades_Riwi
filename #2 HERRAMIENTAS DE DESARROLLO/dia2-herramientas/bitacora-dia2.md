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

- Con mis palabras, un perfil de VS Code es: Es lo que nos permite guardar una serie de configuraciones, extensiones y preferencias para poder usarlas la aplicación.
- ¿Qué cambia en el Explorador entre un perfil y otro?: Las configuraciones personales, las preferencias y las extensiones.
- ¿Por qué VS Code pregunta si confío en el publicador de una extensión?: Ya que puede haben extensiones que busquen vulnerar tu equipo y/o tus proyectos.

## 4. Duelo de perfiles (Etapa 4)

| Prueba | Perfil2-Basico | Perfil1-Pro |
|---|---|---|
| 1. Auto guardado |Se tuvo que guardar manuanlmente con ctrl + s|Despues de los 3 segundo se hizo guardado automatico|
| 2. Auto Rename Tag |Tuve que cambiar el cierre de la etiqueta manualmente |Se cambio automaticamente el cierre de la etiqueta|
| 3. Error Lens |Indica que hay un error pero no especifica cual es |En la misma linea aparece un mensaje en rojo indicando el error en ambos ejercicios|
| 4. Íconos |Se encuentran los iconos predeterminados de vscode|Se encuentran iconos personalizados por la extension correspondiente|
| 5. Guías de indentación |Se ven las guías de identación|Se ven las guías de identación|
| 6. Extensiones corriendo |se consume menos ya que solo tenemos las predeterminadas|Se consume mas en extensiones ya que contamos con extensiones adicionales descargadas|

**Reflexión**

1. ¿Noté diferencias en la experiencia de trabajo entre los dos perfiles? ¿Cuáles?: Extensiones, configuraciones y preferencias.
   -
2. ¿Qué ventajas tiene usar múltiples perfiles en VS Code?: Tener una configuracion y extensiones personalizadas para cada proyecto.
   -
3. ¿Cómo influyen las extensiones en la productividad y en el rendimiento del editor?: Mucho ya que gracias a estas podemos aumentar mucho nuestra productividad.
   -
4. ¿Cuándo sería útil usar perfiles distintos en un entorno profesional? (dos ejemplos): Cuando tenemos proyectos con enfoques dintintos.
   -

## 5. Inspección y modificación (Etapa 5)

- Página que usé:
- Cinco etiquetas que encontré y para qué sirven:
  1. <html> </html> -> Es la etiqueta inicial que le empieza la estructura de nuestra página.
  2. <head> </head> -> Aquí se añadirá informacion en forma de datos calves que servirá para que lo navegadores posicionen nuestra paginá mejor en el navegador.
  3. <title> </title> -> Le da un titulo a nuestra pagina, la cual se verá reflejada en el navegador.
  4. <body> </body> -> Es la etiqueta que enseña todo lo que verá el cliente, es la parte visible de la página.
  5. <div> </div> -> Es un contenedor para organizar el contenido de nuestra página.
- ¿Qué pasó con mis cambios al recargar y por qué?: Se perdieron ya que los cambios realizados que guardan en el DOM y no en el servidor.
- Con mis palabras, el DOM es: Es una copia creada con el navegador del archivo original alojado en el servidor.

## 6. La consola (Etapa 6)

| Operación | Mi predicción | Resultado real |
|---|---|---|
| `2 + 3` |5 | 5|
| `10 - 4 * 2` |12 | 2|
| `(10 - 4) * 2` |12 |12 |
| `10 / 4` |2.5 |2.5 |
| `10 % 3` |0.1 | 1|
| `2 ** 8` |16 |256 |
| `120000 * 0.19` |68.400 |22.800 |
| `365 * 24` |8.760 |8.760 |

- ¿Por qué `0.1 + 0.2` no da exactamente `0.3`?: Porque tiene establecido como tipo de dato un float.
- Errores o advertencias que encontré en la página (o "ninguno"): Una advertencia propia de la pagina que dice: destination container  not found vector-toc-unpinned-container.
- Diferencia entre un error y una advertencia: Los errores afectan sectores de la pagina que pueden afectar al usuario y deben ser corregidos, Las adventencias son observaciones potenciales que pueden convertirse en errores.

## 7. La red / Network (Etapa 7)

| Imagen | Formato | Tamaño | Tiempo | Código de estado |
|---|---|---|---|---|
|mapa|png|23.1kB|414ms|200|
|wikipedia|png|2.1kB|81ms|200|
|Button|png|2.1kB|89ms|200|

| Experimento | Solicitudes | Transferido | Load |
|---|---|---|---|
| A. Sin caché |62|810kB|961ms|
| B. Con caché |65|15.5kB|747ms|
| C. Red lenta |63|812kB|17.05s|

- Archivo más pesado de la página y su tipo: Tipo docuemento y su peso es de 220kB
- ¿Por qué la página cargó más rápido con caché?: Porque la función de cache es almacenar previamente la pagina o segmentos de la misma para disminuir el tiempo de carga de la misma.
- ¿Por qué un desarrollador querría probar con una red lenta?: Para ver como se comporta la pagina o el cargado de sus elementos en ese escenario.
- ¿Qué haría para que una imagen pesada cargue más rápido?: tratar de recudir su peso maximo antes de agjuntarla a la pagina.

## 8. Dispositivos móviles (Etapa 8)

| Ancho (px) | Dispositivo | ¿Cambia el menú? | ¿Imágenes bien? | ¿Scroll horizontal? | Observación |
|---|---|---|---|---|---|
| 320 |Celular|Si|si|no|La estructura de la página se mantiene funcional|
| 375 |Celular|si|si|no|La estructura de la página se mantiene funcional|
| 768 |Tablet|si|si|no|La estructura de la página se manteiene funcional|
| 1024 |Tablet|si|si|no|La estructura de la página se manteiene funcional|
| 1440 |Computador|si|si|no|La estructura de la página se manteiene funcional|

- ¿Por qué es importante probar varias resoluciones antes de entregar un proyecto?: Para probar la responsividad de la página.

## 9. Laboratorio de errores (Etapa 9)

| # | Tipo | ¿Dónde lo detecté? | Mensaje o síntoma | Causa | Solución aplicada |
|---|---|---|---|---|---|
| 1 |Error|app.js, linea 15|Cannot read properties of null (reading 'addEventListener')|Se intentó agregar un evento a un elemento que no se encontró en el HTML.|Verificar que el selector coincida con el elemento HTML y que este exista antes de agregar el evento.
| 2 |Advertencia|Consola del navegador, línea 3|Un warning no detiene la página, solo te avisa de algo.|Se generó una advertencia durante la ejecución del código.|Revisar la advertencia y comprobar si requiere algún ajuste en el código.|
| 3 |Error 404|Recurso favicon.ico, línea 1 de la solicitud|Failed to load resource: the server responded with a status of 404 (Not Found)|El navegador intentó cargar un favicon que no encontró en la ruta indicada.|Verificar la ruta del favicon y agregar el archivo correspondiente o corregir la referencia en el HTML.|
| 4 |Información|Consola del navegador, línea 2 de app.js|app.js empezó a ejecutarse|El mensaje fue generado mediante console.log() para comprobar que el archivo JavaScript se ejecuta.|No requiere solución; se utiliza como confirmación de que el script comenzó a ejecutarse.|

- Uno de los errores, descrito con detalle, y cómo lo resolví: Encontré un error en JavaScript al intentar agregar un evento al botón de saludo. El código buscaba el elemento con el identificador btn-saludar, pero en el HTML el botón tenía el identificador boton-saludar. Como no encontraba el elemento, devolvía null y generaba el error Cannot read properties of null (reading 'addEventListener'). Lo resolví corrigiendo el selector para que coincidiera con el identificador del HTML.
- ¿Qué vi al pausar con el breakpoint?: Al pausar la ejecución con un breakpoint, pude observar el código línea por línea, revisar los valores de las variables y comprobar cómo avanzaba la ejecución. Esto me permitió identificar errores y entender qué estaba sucediendo antes de que se ejecutara la siguiente instrucción.
- ¿Qué pasó al cambiar `visitas` por 99 y al borrarlo?: Al cambiar el valor de visitas por 99 desde DevTools, pude comprobar cómo se modificaba el valor durante la ejecución. Al borrar la variable, esta dejaba de estar disponible en el contexto donde estaba definida. Sin embargo, el valor guardado en localStorage es independiente de la variable y permanece almacenado hasta que se modifica o elimina.
- ¿Para qué usan el localStorage las páginas reales? ¿Qué NO debería guardar ahí?: Las páginas reales utilizan localStorage para guardar información en el navegador que debe mantenerse después de cerrar o recargar la página, como preferencias de tema, idioma o configuraciones del usuario. No debería guardar contraseñas, datos bancarios ni información personal sensible, porque los datos pueden ser accesibles mediante JavaScript.
- Ancho exacto en el que se apilan las tarjetas y regla de CSS responsable: Las tarjetas se apilan verticalmente cuando el ancho de la pantalla es de 600 píxeles o menos.
- ¿Por qué no basta con mirar solo la consola para encontrar errores?: Porque la consola muestra mensajes, advertencias y errores, pero no permite identificar por sí sola todos los problemas. Algunos errores están relacionados con los estilos, la estructura HTML, la distribución de los elementos o el comportamiento visual. Por eso también es necesario utilizar herramientas como Elements, Sources y Network para inspeccionar el código, depurar la ejecución y comprobar la carga de los recursos.

## 10. Comparación con Firefox (Etapa 10)

| Herramienta | Chrome: nombre y atajo | Firefox: nombre y atajo | Diferencia que noté |
|---|---|---|---|
| Inspeccionar HTML y CSS |Elements Ctrl + Shift + C|Inspector Ctrl + Shift + C|Ambas permiten modificar elementos y estilos. Firefox organiza algunas opciones de manera diferente.|
| Consola |Console Ctrl + Shift + J|Consola Ctrl + Shift + K|Las dos permiten ejecutar JavaScript y revisar errores, pero presentan los mensajes de forma diferente.|
| Red |Network Ctrl + Shift + I y pestaña Network|Red Ctrl + Shift + E|Ambas muestran las solicitudes, tamaños y tiempos de carga de los archivos.|
| Simulación de dispositivos |Device Toolbar Ctrl + Shift + M|Modo de diseño adaptable Ctrl + Shift + M|Ambas permiten probar diferentes resoluciones de pantalla.|
| Almacenamiento local |Application → Local Storage|Almacenamiento → Almacenamiento local|La ubicación y el nombre de las herramientas cambian, pero ambas permiten consultar y modificar los datos guardados.|
| Mensaje del error que reintroduje |Cannot read properties of null (reading 'addEventListener')|can't access property "addEventListener", boton is null|Firefox suele indicar directamente qué variable es null, lo que puede facilitar la identificación del problema.|

- Una característica de Firefox interesante o diferente a Chrome (qué es, para qué sirve y cómo la probé): Una herramienta que me pareció interesante fue el Editor de estilos de Firefox. Permite visualizar y modificar los archivos CSS de una página desde las herramientas de desarrollo. Para probarlo, puedo abrir el archivo styles.css, modificar temporalmente el color de fondo y observar cómo cambia la apariencia de la página sin editar directamente el archivo en VS Code.

## 11. Reflexión final (Etapa 11)

- La herramienta que más voy a usar y por qué: La herramienta que más voy a utilizar es la consola, porque me permite identificar errores de JavaScript, comprobar valores de variables y ejecutar instrucciones para entender cómo funciona mi código. Considero que será muy útil cuando esté desarrollando páginas web.
- Lo más difícil del día y cómo lo resolví: Lo más difícil fue identificar por qué el botón de saludo no funcionaba. Al revisar la consola encontré un error relacionado con addEventListener. Después de analizar el código, descubrí que el identificador del botón en JavaScript no coincidía con el del HTML. Lo solucioné corrigiendo el selector y también un error en el nombre de una variable.
- Las DevTools explicadas para alguien que no programa (3 líneas): Las DevTools son herramientas que permiten revisar cómo funciona una página web desde el navegador. 

   Sirven para encontrar errores, modificar temporalmente la apariencia y comprobar cómo se cargan los archivos.

   Son útiles para entender qué está pasando dentro de una página y detectar problemas sin modificar directamente sus archivos originales.
