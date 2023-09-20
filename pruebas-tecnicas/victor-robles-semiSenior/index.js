
function romanoAEntero(romano){

	//romano = uper
	//creamos objeto con numeros romanos y sus correspondientes valores numericos
	const tablaRomanos = {
		I  : 1,
		
		V  : 5,
		
		X  : 10,
		
		L  : 50,
		
		C  : 100,
		
		D  : 500,
		
		M  : 1000
	}


	//variable para almacenar resultado
	let resultado = 0;


	//recorremos numero romano letra a letra
	for(let i = 0 ; i < romano.length; i++){
		
		
		let valorRomano = romano[i];
		console.log(valorRomano)
		
		let valorDecimal = tablaRomanos[valorRomano]
		console.log(valorDecimal)
		
		// si la letra actual es la ultima o si el valor del siguiente caracter es menor o 
		// o igual al del actual, entonces añadimos el resultado

		if(i === romano.length - 1 ||  tablaRomanos[romano[i + 1]] <= tablaRomanos[romano[i]] ){

			resultado += tablaRomanos[romano[i]]


			// si no, restamos valor de la letra  actual al resultado
		}else{
			
			resultado -= tablaRomanos[romano[i]]
		}
		console.log({resultado})

	
	}

	



		//devolver resultado

	return resultado;

}

console.log(romanoAEntero("XIV"))