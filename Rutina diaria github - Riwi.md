🔐 Rutina de autenticación y desautenticación de GitHub mediante GH CLI
1. Verificar si GitHub CLI (gh) está instalado

Antes de comenzar, debemos comprobar si tenemos instalado GitHub CLI en nuestro equipo.

Abrimos una terminal y ejecutamos:

bash
gh --version


Resultados posibles:

Si aparece la versión de GitHub CLI, significa que está instalado correctamente.
Si aparece un mensaje como command not found, significa que debemos instalarlo.

También podemos comprobar su ubicación:

bash
which gh

2. Instalar GitHub CLI en caso de no tenerlo

Si no tenemos instalado GitHub CLI, podemos realizar la instalación utilizando el gestor de paquetes APT de Ubuntu.

Paso 1. Actualizar los repositorios del sistema:

bash
sudo apt update


Paso 2. Instalar GitHub CLI:

bash
sudo apt install gh


Paso 3. Comprobar que la instalación fue exitosa:

bash
gh --version


Si aparece la versión instalada, podemos continuar con el proceso de autenticación.

Nota: Si APT no encuentra el paquete o instala una versión demasiado antigua, debemos consultar las instrucciones oficiales de instalación de GitHub CLI para Ubuntu.
3. Iniciar sesión en GitHub mediante el navegador web

Una vez instalado GitHub CLI, procedemos a autenticar nuestra cuenta.

Paso 1. Ejecutar el comando de autenticación:

bash
gh auth login --web


Paso 2. Seleccionar el servicio de GitHub:

La terminal mostrará algunas opciones. Debemos seleccionar:

text
GitHub.com


Paso 3. Seleccionar el protocolo de conexión:

Seleccionamos:

text
HTTPS


Paso 4. Autorizar Git para utilizar las credenciales de GitHub CLI:

Si aparece la pregunta correspondiente, seleccionamos:

text
Yes


Paso 5. Abrir el navegador:

GitHub CLI mostrará un código de autenticación temporal y solicitará abrir el navegador.

Presionamos Enter para abrir el navegador.
Si no se abre automáticamente, copiamos la dirección indicada por la terminal y la pegamos en nuestro navegador.

Paso 6. Introducir el código de autenticación:

Ingresamos el código temporal proporcionado por la terminal.
Confirmamos la autenticación.
Iniciamos sesión en nuestra cuenta de GitHub si el navegador lo solicita.
Autorizamos GitHub CLI.

Paso 7. Verificar la autenticación:

Regresamos a la terminal y comprobamos que el proceso haya finalizado correctamente:

bash
gh auth status


Si todo está correcto, aparecerá un mensaje indicando que hemos iniciado sesión en GitHub.

4. Clonar un repositorio mediante GitHub CLI

Después de autenticar nuestra cuenta, podemos descargar un repositorio de GitHub a nuestro equipo.

Paso 1. Ubicarnos en el directorio donde queremos guardar el repositorio:

bash
cd ~/Documentos


Podemos utilizar cualquier otra ubicación de nuestro equipo.

Paso 2. Clonar el repositorio:

bash
gh repo clone USUARIO/NOMBRE_REPOSITORIO


Ejemplo:

bash
gh repo clone usuario/proyecto


Debemos reemplazar USUARIO y NOMBRE_REPOSITORIO por los datos reales del repositorio.

Paso 3. Ingresar a la carpeta del repositorio:

bash
cd proyecto


Paso 4. Comprobar que el repositorio está conectado correctamente:

bash
git remote -v


Este comando permite verificar la dirección del repositorio remoto.

5. Configurar el nombre y correo electrónico de Git

Después de clonar el repositorio, debemos configurar nuestra identidad para que Git pueda asociarla con los cambios y commits que realicemos.

Es importante diferenciar entre la configuración global y la configuración local.

Para esta rutina, utilizaremos la configuración local, de manera que los datos solamente se apliquen al repositorio actual.

Paso 1. Configurar el nombre de usuario:

bash
git config --local user.name "Tu Nombre"


Paso 2. Configurar el correo electrónico:

bash
git config --local user.email "tu_correo@ejemplo.com"


Se recomienda utilizar el correo asociado a nuestra cuenta de GitHub.

Paso 3. Verificar la configuración:

bash
git config --local --list


También podemos consultar cada dato individualmente:

bash
git config --local user.name

bash
git config --local user.email


Si los datos aparecen correctamente, la configuración está completa.

Importante: user.name y user.email identifican al autor de los commits. No son las credenciales de autenticación de GitHub ni determinan qué cuenta está iniciada en gh.
6. Checklist de verificación del proceso

Antes de comenzar a trabajar en el repositorio, debemos verificar que todos los pasos anteriores se hayan cumplido.

markdown
### Checklist de autenticación y configuración

- [ ] Se verificó si GitHub CLI estaba instalado.
- [ ] Se instaló GitHub CLI mediante APT, si fue necesario.
- [ ] Se comprobó la versión de gh.
- [ ] Se inició sesión mediante gh auth login --web.
- [ ] Se autorizó la cuenta desde el navegador.
- [ ] Se verificó la autenticación con gh auth status.
- [ ] Se clonó correctamente el repositorio.
- [ ] Se ingresó a la carpeta del repositorio.
- [ ] Se verificó la conexión con el repositorio remoto.
- [ ] Se configuró user.name.
- [ ] Se configuró user.email.
- [ ] Se verificaron los datos de configuración.


Resultado: Si todos los puntos están completados, podemos comenzar a trabajar con el repositorio.

7. Inicio del trabajo y realización de cambios

Una vez completada la autenticación y configuración, estamos en condiciones de realizar modificaciones en los archivos del repositorio.

Podemos trabajar normalmente con nuestro editor de código o desde la terminal.

Comandos básicos para trabajar con Git:

Consultar el estado de los archivos:

bash
git status


Agregar los cambios:

bash
git add .


Crear un commit:

bash
git commit -m "Descripción de los cambios realizados"


Enviar los cambios al repositorio remoto:

bash
git push


Consultar los últimos commits:

bash
git log --oneline -5

Importante: Antes de realizar el proceso de desautenticación, debemos asegurarnos de haber enviado los cambios importantes al repositorio remoto o de tener una copia de seguridad.
8. Cerrar sesión de GitHub mediante GH CLI

Cuando terminemos de trabajar, podemos cerrar la sesión de nuestra cuenta de GitHub desde la terminal.

Paso 1. Ejecutar el comando de desautenticación:

bash
gh auth logout


Paso 2. Confirmar la cuenta:

Si tenemos varias cuentas autenticadas, GitHub CLI nos solicitará seleccionar cuál queremos desconectar.

Seleccionamos la cuenta correspondiente.

Paso 3. Confirmar el cierre de sesión:

Aceptamos la confirmación cuando sea solicitada.

También podemos cerrar directamente la sesión de GitHub.com mediante:

bash
gh auth logout --hostname github.com


Paso 4. Comprobar que la sesión se cerró correctamente:

bash
gh auth status


Si el proceso fue exitoso, ya no aparecerá la cuenta como autenticada.

Nota: Cerrar sesión en GH CLI elimina las credenciales de autenticación almacenadas para esa cuenta y host. No elimina automáticamente la configuración de identidad de Git ni los archivos del repositorio.
9. Eliminar la configuración de Git y borrar el repositorio local

Después de cerrar sesión, podemos eliminar la configuración de identidad asociada al repositorio y, si ya no necesitamos sus archivos, eliminar la carpeta local.

9.1. Eliminar user.name

Primero, debemos ubicarnos dentro de la carpeta del repositorio.

bash
cd ~/Documentos/proyecto


Ejecutamos:

bash
git config --local --unset user.name


Este comando elimina el nombre de usuario configurado localmente.

9.2. Eliminar user.email

Ejecutamos:

bash
git config --local --unset user.email


Este comando elimina el correo electrónico configurado localmente.

9.3. Verificar que los datos fueron eliminados

Ejecutamos:

bash
git config --local --list


También podemos comprobar individualmente:

bash
git config --local --get user.name

bash
git config --local --get user.email


Si no aparecen resultados, significa que los valores locales fueron eliminados.

Importante: Si anteriormente configuramos los datos utilizando --global, debemos eliminarlos con:

bash
git config --global --unset user.name

bash
git config --global --unset user.email


No debemos ejecutar estos últimos comandos si queremos conservar nuestra identidad global para otros repositorios.

9.4. Eliminar la carpeta del repositorio

Si ya terminamos de trabajar y no necesitamos conservar una copia local, podemos eliminar la carpeta del repositorio.

Paso 1. Salir de la carpeta del repositorio:

bash
cd ..


Paso 2. Verificar el nombre de la carpeta:

bash
ls


Paso 3. Eliminar el directorio del repositorio:

bash
rm -rf proyecto


Reemplazamos proyecto por el nombre real de nuestra carpeta.

⚠️ Advertencia: rm -rf elimina permanentemente los archivos locales de la carpeta indicada, sin enviarlos a la papelera. Antes de ejecutarlo, debemos verificar cuidadosamente la ruta y asegurarnos de no tener cambios sin guardar o respaldar.

Resultado: Hemos cerrado la sesión, eliminado la configuración local de Git y eliminado la copia local del repositorio.

El repositorio original de GitHub no se elimina. Solamente estamos borrando su copia de nuestro equipo.

10. Tips, recomendaciones y solución de inconvenientes
10.1. Recomendaciones generales
Verificar siempre que estamos utilizando la cuenta correcta antes de clonar o modificar un repositorio.
Utilizar gh auth status para comprobar el estado de autenticación.
Preferir la autenticación mediante navegador para evitar gestionar manualmente tokens personales.
No compartir códigos de autenticación, tokens ni contraseñas.
Configurar user.name y user.email de manera local cuando trabajemos con diferentes cuentas.
Utilizar nombres de commits descriptivos para identificar los cambios realizados.
Ejecutar git status antes de realizar un commit.
Comprobar que los cambios importantes se hayan enviado al repositorio remoto antes de eliminar la carpeta local.
Evitar utilizar rm -rf sin verificar previamente la ruta.
10.2. Posibles inconvenientes y soluciones
Problema	Posible causa	Solución
gh: command not found	GitHub CLI no está instalado.	Ejecutar sudo apt update y sudo apt install gh.
Unable to authenticate	La autenticación no se completó correctamente.	Ejecutar nuevamente gh auth login --web.
El navegador no se abre	Problemas con la apertura automática del navegador.	Copiar la dirección y el código proporcionados por la terminal.
Repository not found	Nombre incorrecto o falta de permisos.	Verificar el propietario, nombre y permisos del repositorio.
Permission denied	La cuenta no tiene permisos suficientes.	Comprobar la cuenta activa y los permisos del repositorio.
Author identity unknown	No se configuró la identidad de Git.	Configurar user.name y user.email.
Nothing to commit	No existen cambios pendientes para registrar.	Comprobar los archivos mediante git status.
Authentication failed al hacer push	Problemas con las credenciales o autenticación.	Revisar gh auth status y la configuración de Git.
No se elimina la configuración	El valor puede estar definido en otro nivel de configuración.	Revisar git config --show-origin --list.
10.3. Comandos útiles de consulta
Comando	Función
gh --version	Consultar la versión de GH CLI.
gh auth status	Comprobar el estado de autenticación.
gh auth login --web	Iniciar sesión mediante el navegador.
gh auth logout	Cerrar sesión.
gh repo clone usuario/repositorio	Clonar un repositorio.
git status	Consultar el estado del repositorio.
git remote -v	Consultar los repositorios remotos.
git config --local --list	Consultar la configuración local.
git config --show-origin --list	Consultar la configuración y su archivo de origen.
git log --oneline -5	Consultar los últimos cinco commits.
11. Checklist final de desautenticación y limpieza

Al finalizar nuestra jornada de trabajo, debemos comprobar que el proceso de cierre y limpieza se haya realizado correctamente.

markdown
### Checklist de cierre de sesión

- [ ] Se verificó que los cambios importantes estuvieran respaldados o enviados.
- [ ] Se ejecutó gh auth logout.
- [ ] Se comprobó el cierre de sesión mediante gh auth status.
- [ ] Se eliminó la configuración local de user.name.
- [ ] Se eliminó la configuración local de user.email.
- [ ] Se verificó que los datos de identidad local fueron eliminados.
- [ ] Se salió de la carpeta del repositorio.
- [ ] Se verificó el nombre de la carpeta que se iba a eliminar.
- [ ] Se eliminó la carpeta local del repositorio, si ya no era necesaria.

Conclusión

Mediante esta rutina podemos gestionar de manera organizada la autenticación y desautenticación de una cuenta de GitHub utilizando GitHub CLI (gh).

El procedimiento permite verificar la instalación de las herramientas, iniciar sesión mediante el navegador, clonar repositorios, configurar la identidad de Git, realizar modificaciones y finalmente cerrar la sesión y limpiar la configuración local.

De esta manera, mantenemos un flujo de trabajo controlado y reducimos el riesgo de utilizar una cuenta equivocada al trabajar con diferentes repositorios o proyectos.