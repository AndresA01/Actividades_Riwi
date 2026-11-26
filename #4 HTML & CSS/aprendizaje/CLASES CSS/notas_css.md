/*seleccionar elementos en css*/

/*selección por elemento*/
li {
	color: red;

}

/*selección por clase*/
.faltante {
	color: blue;
}

/*selección por id*/
#ejemplo{

}

/*propiedades de texto*/
p {

}

/*Estilos en parrafos*/
	/*color del texto*/
	color:red;
	/*tipo de letra*/
	font-family: sans-serif;
	/*tamaño de letra*/
	font-size: 14px;
	/*grosor o ancho de letra*/
	font-weight: 700;
	/*pone el negrita o un grosor de 700*/
	font-weight: bold;
	/*pone un grosor mas allá del que tienes actualmente*/
	font-weight: bolder;
	/*pone la letra en cursiva o inclinada*/
	font-style: italic;
	/*valor normal*/
	font-style: normal;
	/*tambien inclina la tipografia pero no tanto*/
	font-style: oblique;
	/*alinea el texto en su contenedor*/
	text-align: center;
	/*el texto se alinea hacia donde comenzas a escribir*/
	text-aling: start;
	/*el texto se alinea hacian donde terminas de escribi*/
	text-aling: end;
	/*subraya el texto por abajo*/
	text-decoration: underline;
	/*subraya el texto por arriba*/
	text-decoration: overline;
	/*tacla el texto o subraya por la mitad*/
	text-decoration: line-through;
	/*quitarle alguna decoración al texto, como por ejemplo el subrayado*/
	text-decoration: none;
	/*define el espaciado (altura) de la letra , tambien se puede definir por porcentaje*/
	line-height: normal; line-height: 1; line-height: 2; ...
	/*define el esapcio entre letras */
	letter-spacing; 10px
	/*podemos transformar el texto, minuscula, mayuscula, capitalize, transformar texto en un ancho completo  etc.*/
	text-transform: uppercase; text-transform: lowercase; text-trnaform: capitalize; text-transfrom: full-width;*/

/*Enlazar tipografías*/
-Entrar a google fonts y buscar la tipografia que quieras usar.
-Copiar el link de la tipografia y pegarlo dentro del head de nuestro html.
-segunda forma: Crear un archivo css nuevo
@font-face {
	src: url("dirección de donde esta ubicada la fuente") format("truetype");
	font-weight: 400; -> con eso definimos el  grosor a la que quiero que se aplique este tipo de letra.
	podemos repetir esto para definir varias tipografias para varios grosores de letras.
}


/*Box model*/

En html todo se considera como una caja rectangular

las propiedades de las cajas son: contenido, padding (espacio entre el contenido y el borde del elemento), borde (linea que rodea el contenido y paddign), margen (espacio alrededor de la caja que esta fuera del borde, no forma parte de la caja pero separa el emento de otras cajas). 

 /*width y heigth*/ 

width define el ato 
heigth define el ancho 

/*padding y margin*/

padding: aumenta el tamaño alrededro del contenido dentro de los borders
padding: 10px, aumenta el tamaño alredor del contenido en todas las direcciones
padding-top: 10px, aumenta el tamaño arriba del contenido
padding-bottom: 10px, aumenta el tamaño abajo del contenido
paddin-left: 10px, aumenta el tamaño a la izquierda del contenido
padding-right: 10px, aumenta el tamaño a la derecha del contenido
padding: 10px 20px 30px 40px; aquí definimos el padding para todos los lados en una sola linea teniendo en cuenta el sentido de las abujas del reloj, 10 equivale arriba, 20 equivale a la derecha, 30 equivale a abajo, 40 equivale a la izquierda.
padding: 10px 20px; define el horizontal y vertical 10 equivale a vertical y 20 equivale al horizontal

