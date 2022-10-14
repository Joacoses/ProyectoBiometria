# ProyectoBiometria
Este proyecto consigue pasar los datos que emite un micro arduino a una base de datos mediante una app, que posteriormente dichos datos se pueden visualizar por una web.

#Explicación de comandos para Rest
  -En los directorios servidorREST y logica hay que ejecutar el comando "npm install"
  -Correr servidor: hay que dirigirse al directorio de servidorRest y en la cmd poner el comando "npm run servidor"
  -Correr test servidor: hay que dirigirse al directorio de servidorRest y en la cmd poner el comando "npm test"
  -Correr test logica: hay que dirigirse al directorio de logica y en la cmd poner el comando "npm test"

#Explicación de comando para abrir la web
  -Correr web: situarse en el directorio ux y en la cmd poner el comando "python -m http.server 8000", posteriormente dirigirse a un navegador y poner la url "localhost:8000"

#Explicación de comandos para la base de datos
  -Abrir base de datos: dirigirse al directorio "bd" y en la cmd correr el comando "sqlite3 datos.bd", hay que tener el sqlite3.exe en dicho directorio
  -Ver datos de la base de datos: una vez abierta la base de datos ejecutar el comando "select * from Medidas" y posteriorente ";", así se mostrarán todos los datos de la única tabla que hay en la base de datos

#Explicación para la app
  -Hay que seleccionar el dispositivo o emulador donde queramos abrir la app y darle al "run" que aparece al lado de la seleccion del dispositivo. Hay que seleccionar App en lo que queramos correr, aunque estará por defecto
  
#Explicación arduino
  -Seleccionar la placa "Adafruit Feather nRF52840 Express" y el puerto donde está conectado el micro, posteriormente correr el codigo
