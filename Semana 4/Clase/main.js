// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];


// const alumnos = ["Franco", "Valentina", "Gabriel"]

// let faltanAlumnos = false

// faltanAlumnos = confirm("¿Llego alguien nuevo?")

// while(faltanAlumnos){
//     let alumnoNuevo = prompt("Nombre del alumno: ")

//     alumnos.push(alumnoNuevo)

//     faltanAlumnos = confirm("¿Llego alguien nuevo?")
// }






// const  numeros = [1,2,3,4,5];
// console.log( numeros[0] ) // 1; 
// console.log( numeros[3] ) // 4; 

// let resultado  = numeros[1] + numeros[2] 
// console.log( resultado  ) // 5;


// const numeros = [1, 2, 3, 4, 5, 6, 7 , 89, 123];
// for (let i = 0; i < numeros.length ; i++) {
//     alert(numeros[i]);
// }



// nombres.pop()

// console.log(nombres) // ["Luis", "Ana", "Julia"]

// nombres.shift()

// console.log(nombres) // ["Ana", "Julia"]

// let arrayAhoraString = nombres.join(", ")

// console.log(arrayAhoraString)


// let indice = nombres.indexOf("Ana")
// console.log(indice)



// console.log(nombres.reverse()) 

// console.log(nombres)

// indice = nombres.indexOf("Ana")
// console.log(indice)


// const nombres = ["Luis", "Juan", "Julia", "Juan", "Ana", "Julia", "Juan"]

// for (const nombre of nombres){
//     console.log(nombre)
// }

// for (let i = 0; i < nombres.length ; i++) {
//     console.log(nombres[i]);
// }



// ['Rita', 'Ana', 'Vanesa']


const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']

console.log(nombres)
console.log(masculinos)


const perros   = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)