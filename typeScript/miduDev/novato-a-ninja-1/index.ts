/// inferencia

// como a y b infieren que son number sin decerle nada
const a = 1
const b = 2
const c = a + b 
// tambien sera number

let cadenaTexto = "hola"

cadenaTexto.toLowerCase()

// ❌ codenaTexto = 2 
// ❌ cadenaTexto.propiedadInexistente

/// any
// desactiva el tipado
let obj: any = { x: 0};

obj.foo()
obj();
obj.bar = 100
obj = "hello"
const n:number = obj

/// functions

function saludar(name: string){
	console.log(`Hola ${name}`)
}

//  ✅  saludar("pepe")
//  ❌ saludar(2)

function saludar2({name, age}: {name: string, age: number}){
	console.log(`Hola ${name} tu edad es ${age}`)
}

function saludar3(persona : {name: string, age: number}){
  const {name,age} = persona
	console.log(`Hola ${name} tu edad es ${age}`)
}

saludar2({name: "daniel",age: 29})

//////////

// function saludar4({name, age}: {name: string, age: number}):string{
// 	console.log(`Hola ${name} tu edad es ${age}`)
// 	return age // ❌ no devulve el tipo correcto
// }

// declarar tipos para functions, 
// se declaran sus parametros y su return

const sayHiFromFunction = (fn:(name:string) => void) => {
	return fn("Pepe")
}

const sayHi = (nombre: string)=>{
	console.log(`Hola ${nombre}`)
}

sayHiFromFunction(sayHi)


///tipar arrow functions
const sumar = (a: number , b: number): number =>{
	return a + b
}

const restar: (a: number, b: number) => number = (a, b) => {
	return a - b
}


/// never, nunca devuelve nada
function throwError(message: string): never {
	throw new Error(message)
}


/// funciones anonimas segun el contexto
// ocaciones en las que tenemos inferencia de tipo en las funciones
const avengers = ["Spidey", "Hulk", "Wolverine"]

avengers.forEach(avenger=>{
	console.log(avenger.toLocaleUpperCase())
})


/// objetos
let hero = {
	name:"thor",
	age: 1500
}
// hero.power = 100  ❌ 

function createHero(name: string, age: number){
	return {name, age}
}
const thor = createHero("thor", 1500)


/// Type Alias

// type Hero = {
// 	name: string,
// 	age: number
// }

// let hero2: Hero = {
// 	name: "thor",
// 	age: 1500
// }

// function createHero2(hero: Hero): Hero {
// 	const {name, age} = hero
// 	return {name, age}
// }

// const thor2 = createHero2({
// 	name:"thor",
// 	age: 1500
// })


/// optionals properties

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
	readonly id?: HeroId,
	name: string,
	age: number
	isActive?: boolean
}

let hero2: Hero = {
	name: "thor",
	age: 1500
}

function createHero2(hero: Hero): Hero {
	const {name, age} = hero
	return {
		id: crypto.randomUUID(), 
		name, 
		age, 
		isActive:true
	}
}

const thor2 = createHero2({
	name:"thor",
	age: 1500
})
console.log(thor2.isActive) // -> true

thor2.id?.toString()

/// template union types
type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = "0033ff" // ❌
const color2: HexadecimalColor = "#0033ff"


/// Union Types

// type HeroId2 = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal" //// union

// const enableAnimationDuration : boolean | number = true  //// union (or)

// type Hero2 = {
// 	readonly id?: HeroId2,
// 	name: string,
// 	age: number
// 	isActive?: boolean,
// 	powerScale?: HeroPowerScale
// }

// let hero3: Hero2 = {
// 	name: "thor",
// 	age: 1500
// }

// function createHero3(hero: Hero2): Hero2 {
// 	const {name, age} = hero
// 	return {
// 		id: crypto.randomUUID(), 
// 		name, 
// 		age, 
// 		isActive:true
// 	}
// }

// const hulk = createHero3({name:"hulk" , age: 1500})
// hulk.powerScale = "planetary"


/// intersection types

// type VillaindId = `${string}-${string}-${string}-${string}-${string}`
// type VillainPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal"

// type VillainBasicInfo = {
// 	name: string,
// 	age: number
// }


// type VillainProperties = {
// 	readonly id?: VillaindId,
// 	isActive?: boolean,
// 	powerScale?: VillainPowerScale
// }

// type Villain = VillainBasicInfo & VillainProperties ///// intersection (and)

// let villain: Villain = {
// 	name: "Joker",
// 	age: 1500
// }

// function createVillain(input: VillainBasicInfo): Villain {
// 	const {name, age} = input
// 	return {
// 		id: crypto.randomUUID(), 
// 		name, 
// 		age, 
// 		isActive:true
// 	}
// }

// const joker = createVillain({name:"Joker" , age: 40})
// joker.powerScale = "planetary"
// console.log(joker)

/// Type Indexing , para utilizar partes de un tipo

// type VillainProperties = {
// 	isActive: boolean,
// 	address: {
// 		planet: string,
// 		city: string
// 	}
// }

// const addressVillain: VillainProperties["address"] = {
// 	planet: "Earth",
// 	city: "Madrid"
// }

/// Type from value

// const address = {
// 	planet: "Earth",
// 	city: "Madrid"
// } 

// type Address = typeof address // typeof, extrae los tipos de un objeto, de funciones

// const addressTwitch: Address ={
// 	planet: "Mars",
// 	city: "twitch"
// }

/// Type from function return

// function craateAddress(){
// 	return {
// 		planet: "Tierra",
// 		city: "Medellin"
// 	}
// }

// // asignamos el tipo que devuelve la function a Address
// type Address = ReturnType<typeof craateAddress>



//// Arrays

//const lenguages:string[] = []
// const lenguages:Array<string> = []

const lenguages: (string | number)[] = []

lenguages.push("JavaScript")
lenguages.push(2)

/////

type PersonBasicInfo = {
	id?: number,
	name: string,
	age: number
}

const personWithBasicInfo: PersonBasicInfo[] = []

//////

/**
 * ["x", "o", "x"]
 * ["o", "x", "o"]
 * ["x", "", "o"]
 * 
 */

type CellValue = "x" | "o" | " "
type GameBoard = [
	[CellValue,CellValue,CellValue],
	[CellValue,CellValue,CellValue],
	[CellValue,CellValue,CellValue]
]

const gameBoard:GameBoard = [
	["x", "o", "x"],
	["o", "x", "o"],
  ["x", " ", "o"]
]

gameBoard[0][1] = "x"

/// tuplas

type RGB = [number,number,number]

const rgb: RGB = [2,2,2]