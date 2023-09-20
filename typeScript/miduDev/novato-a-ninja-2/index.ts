/// >>>>>>>>>>>>>>>> Read Only <<<<<<<<<<<<<<

// type Hero = {
// 	readonly id: number
// 	name: string
// 	age: number
// 	isActive?: boolean
// }

// const Spidey: Hero = {
// 	id: 1,
// 	name: "Miles Morales",
// 	age: 21,
// 	isActive: true
// }


/// >>>>>>>>>>>>>>>>  template union types <<<<<<<<<<<<<<

// type Hero = {
// 	readonly id: `${string}-${string}-${string}-${string}-${string}`
// 	name: string
// 	age: number
// 	isActive?: boolean
// }

// function createHero(hero: Hero): Hero {
// 	const {name, age} = hero

// 	return {
// 		id: crypto.randomUUID(),
// 		name,
// 		age,
// 		isActive: true
// 	}
// }

/// ej 2

// type Color = `${string}`
// const hexadeximalColor: Color = "#ff0000"  // ❌
// const blackHexadecimal: color = "ff00000" // ✅

/// >>>>>>>>>>>>>>>>  arrays <<<<<<<<<<<<<<

// const languages: string[] = []
// languages.push("typescript") // ✅
// languages.push(2) // ❌
// languages.push(true) // ❌


/// >>>>>>>>>>>>>>>>  multi arrays <<<<<<<<<<<<<<

// type CellValue = "X" | "O" | ""

// //tupla, especificamos exactamente como queremos el array,
// // con readonly evitamos que se pueda hacer un push, o cualquier metodo de los arrays
// const board:readonly [
// 	[CellValue, CellValue, CellValue],
// 	[CellValue, CellValue, CellValue],
// 	[CellValue, CellValue, CellValue]
// ]= [
// 	["X", "", ""],
// 	["", "X", ""],
// 	["", "", "O"]
// ]	


/// >>>>>>>>>>>>>>>>  Enums <<<<<<<<<<<<<<
/// siempre que se pueda utilizar const

const enum ERROR_TYPES{
	NOT_FOUND,
	UNATHORIZED,
	FORBIDEN
}

function mostrarMensaje (tipoDeError: ERROR_TYPES){
	if (tipoDeError === ERROR_TYPES.NOT_FOUND){
		console.log("no se encuentra el recurso")
	}else if (tipoDeError === ERROR_TYPES.UNATHORIZED){
		console.log("no tienes permisos para acceder")
	}else if(tipoDeError === ERROR_TYPES.FORBIDEN){
		console.log("recurso no encontrado")
	}
 }

 