Lista de comando utilizados en la actividad

ls -> Utilizado para ver la información dentro del directorio actual o especifico.
cd -> Utilizado para acceder a una carpeta en un directorio en especifico.
pwd -> Utilizado para mostrar la ubicacion del directorio actual.
ls -a -> Utilizado para listar los archivos ocultos dentro de un directorio.
ls -l -> Utilizado para listar los archivos del directorio actual o especifico con detalles adicionales.
ls -R -> Utilizado para listar los archivos apartir de un directorio incluyendo carpeta y subcarpetas. 
tree -> Utilizado para listar los archivos apartir de un directorio incluyendo carpeta y subcarpetas pero con una iterfaz mas organizada.
touch -> Utilizado para la creación de archivos dentro del directorio actual o especifico.
mkdir -> Utilizado para la creación de carpetas dentro del directorio actual o especifico.
mkdir -p -> Utilizado para la creación de carpetas y subcarpetas en una sola linea de codigo.
cp -> Utilizado para copiar archivos en directorio actual o especifico.
mv -> Utilizado para mover y renombrar archivos en el directorio actual o especifico.
cat -> utilizado para visualizar contenido de un archivo y concatenar la información de varios archivos en uno nuevo.
cp -r -> Utilizado parar copiar carpetan con su contenido.
find -> Utilizado para la busqueda especifica de archivos, carpepas o listar archivos vacios.
grep -rn -> Utilizado para la busqueda de contenido dentro de un archivo.
wc -l -> Utilizado para contar las lienas de codigo dentro de un archivo.
* -> Utilizado como complemento mayormente por find para la busqueda de elementos especificos por un nombre.

Respues a puntos de control

1: Explica la diferencia entres una ruta absoluta y una relativa utilizando dos carpetas que acabas de crear

R: En este caso el ejemplo será la carpeta de entrada la cual se creo recientemente la ruta absoluta de esta seria desde el apartado de
home/usuario/Documents/Riwi/entrada
 
y una ruta alternativa seria ingresando a la carpeta entrada desde el escritorio, en ese caso la ruta seria Desktop/../Documents/Riwi/entrada


2: Explica porqué .control_interno no aparece en el listado normal y cómo manejar nombres que contienen espacios.

R: los archivos que contienen un . al inicio de su nombre son catalogados como archivos ocualtos y no serań visibles desde la consola
hasta ejecutar el comando ls -a el cual nos permite poder verlos.

los nombre con espacio no podran ser usados a menos que lo encerremos dentro de unas comillas, ya sean dobles o simples ej: "archivo del andres".


3: Explica cuándo utilizarías > y cuando >>
 
R: Si hablamos desde la funcionanlidad de echo utilizaria > cuando necesito poner un texto en un archivo vacio o reemplazar el texto existente.

Utilizaría >> cuando quiera añadir un texto adicional al final del archivo.


4: Demuestra que mover un archivo cambia su ubicación y conserva su contenido

R: con el comando mv podemos seleccionar el archivo y cambiarlo de lugar conservando el contenido del mismo.

ej: tenemos en el escritorio el archivo prueba.txt y queremoso moverlo a documentos con el contenido que este tenga.

nos encontramos dentro del escritorio la sintaxis seria la siguiente: mv prueba.txt ../Documents/ como resultado el archivo see movería desde
escritorio a documentos manteniendo su contenido intacto.


5: Explica como el mismo comando permite mover y renombar archivos

R: con el comando mv podemos mover elementos a otras ubicaciones y tambien cambiar su nombre de ser necesario


6: Explica la diferencia entre copiar un archivo y copiar una carpeta que contiene otras carpetas

R: En este caso la diferencia mas importante la encontramos en los comandos usados, para un archivo basta con CP, pero para una carpeta que
contiene archivos y/o subcarpetas se requiere CP -R.


7: Explica la diferencia entre bucar por nombre de archivo y buscar dentro de su contenido

R: como en el punto anterior la diferencia mas importante la encontramos en los comandos usados, para buscar por nombre de archivo se usa 
find [ruta de la carpeta] -name o -iname si no sabemos con serteza donde hay una mayusca o no y "nombre del archivo"

para buscar dentro de su contenido usamos grep -rn "pendiente" [ruta]


8: Explica porqué rmdir puedo eliminar una carpeta vacia, pero falló cuando contenía archivos.

R: Eso ocurre porque el comando no comtempla borrar carpetas cuando estas tiene archivos en su interior, para poder borrar la carpeta 
y su contenido se debe usar el comando rm -r.

