# Parche Dev 2026

Sitio oficial del encuentro Parche Dev 2026, construido solo con HTML semántico.
Reto individual del Módulo 1 · HTML y CSS, RIWI.

Sitio publicado: https://andresa01.github.io/Actividades_Riwi/

## Páginas

- Inicio
- Agenda
- Ponentes
- Inscripción y confirmación
- Código de conducta

## Cómo verlo en tu computador

1. Clona el repositorio.
2. Ábrelo en VS Code.
3. Abre index.html con Live Preview.

## Decisiones que tomé

- (Explica al menos tres decisiones: por qué elegiste una etiqueta y no otra.)

1. Usé <nav> en lugar de un <div> para el menú de navegación, porque <nav> identifica semánticamente los enlaces que permiten desplazarse entre las páginas del sitio.

2. Usé <table>, <th> y <td> para organizar las tarifas y la agenda, porque son etiquetas apropiadas para presentar información en filas y columnas, diferenciando los encabezados de los datos.

3. Usé <label> para los campos del formulario de inscripción, porque permite asociar cada campo con su descripción y facilita que el usuario identifique qué información debe ingresar.

- (Responde las preguntas del apartado “Investiga” del ticket 5.)

1. ¿Qué aparece después del signo ? en gracias.html?

    Aparecen los parámetros que el formulario envía mediante el método GET, representados como pares de nombre y valor, por ejemplo, nombre=Juan. Si se envían varios campos, se separan con el símbolo &.

2. ¿Cómo se representan los espacios, las tildes y el símbolo @?

    Los caracteres especiales se codifican para poder incluirse en una URL. Por ejemplo, un espacio puede representarse como + en los datos de un formulario enviados mediante GET, una tilde como una secuencia porcentual como %C3%A1 y el símbolo @ como %40.

3. ¿Qué ocurre con los campos vacíos o que no se llenaron?

    Los campos vacíos pueden enviarse como parámetros sin valor si tienen un atributo name. Los controles que no están marcados, como las casillas de verificación, normalmente no se incluyen en el envío. Los campos sin name tampoco se envían.

4. ¿Por qué no se deben enviar contraseñas usando method="get"?

    Porque los datos aparecen en la URL y pueden quedar expuestos en el historial del navegador, registros del servidor o enlaces compartidos. Para enviar contraseñas se debe utilizar method="post" junto con una conexión HTTPS.

## Lo que aprendí

- (Al menos tres aprendizajes de la jornada.)

1. Nuevas etiquetas como tablas y formularios.
2. Como vincular una seccion con otra.
3. Como estructurar tablas y formularios.

## Hecho por

Neider Andres Acevedo A. · [GitHub](https://github.com/AndresA01)
