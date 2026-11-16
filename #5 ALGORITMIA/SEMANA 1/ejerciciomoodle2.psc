proceso calculadoradepropinas
escribir "Cuanto fue la cuenta?"
leer cuenta
escribir "Cuanto desea dejar de propina?"
leer propina
escribir "Cuantas personas van a pagar la cuenta?"
leer personas
si personas < 0 entonces
	propinaTotal <- (cuenta * propina) / 100
totalCuenta <- cuenta + propinaTotal
totalPorPersona <- totalCuenta / personas
escribir "La propina total es: ", propinaTotal
escribir "El total de la cuenta es: ", totalCuenta
escribir "El total por persona es: ", totalPorPersona
	
finsi


finproceso