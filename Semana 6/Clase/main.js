// function porCadaUno(arreglo, funcion) {
//   const array = []
//   for (let i = 0; i < arreglo.length; i++) {
//     array.push(funcion(arreglo[i]))
//   }
//   return array
// }

// // Ejemplo de uso:
// const numeros = [1, 2, 3, 4, 5];

// function multiplicador (valor){
//   return valor * 2
// }

// // Imprime cada número multiplicado por 2

// const arrayTrasformado = porCadaUno(numeros, multiplicador);

// console.log(arrayTrasformado)

class Gato {
  constructor(raza, nombre){
    this.raza = raza
    this.nombre = nombre
  }

  cambioDeNombre(nombreAAgregar){
    this.nombre = this.nombre + nombreAAgregar
  }
}




// arrayDeGatos.forEach(el =>{
//   el.cambioDeNombre("Michi")
// })


// console.log(arrayDeGatos)

// const buscadorDeGatos = function (el, nombre){
//   return el.raza.includes(nombre)
// }

// const razaABuscar = prompt("Cual es la raza que buscas?")

// const gatoEncontrado = arrayDeGatos.find(el => buscadorDeGatos(el, razaABuscar))

// console.log(gatoEncontrado)

const arrayDeGatos = [
  new Gato("Dalmata", "Clarita"),
  new Gato("Angora", "Clarita"),
  new Gato("Naranjo", "Clarita"),
  new Gato("Gato", "Clarita"),
  new Gato("Atigrado", "Pepelui"),
]

// const arrayFiltrado = arrayDeGatos.filter((gato)=>{
//   return gato.nombre.includes("i") 
// })

// console.log(arrayFiltrado)

// const elValorSeEncuentra = arrayDeGatos.some(gato =>{
//   return gato.nombre == "Pepelui"
// })

// console.log(elValorSeEncuentra)

const arrayTrasformado = arrayDeGatos.map(gato => {
  return gato.nombre
})

console.log(arrayTrasformado)

const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
  {nombre: 'AngularJS', precio: 22000},
  {nombre: 'Desarrollo Web', precio: 16000},
]


// const actualizado = cursos.map((el) => {
//   return {
//       nombre: el.nombre,
//       precio: el.precio * 1.25
//   }
// })

// console.log(actualizado)

// const numeros = [1, 2, 3, 4, 5, 6]

// const total = numeros.reduce((acumulador, valorDelArray) => acumulador + valorDelArray, 0)


// const total = cursos.reduce((acu, ele)=>{
//   return acu + ele.nombre
// }, "")

// console.log(total)

// const numeros = [ 40, 1, 5, 200 ];

// numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]

// numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

// const items = [
//   { name: 'Pikachu', price: 21 },
//   { name: 'Charmander', price: 37 },
//   { name: 'charmander', price: 37 },
//   { name: 'Pidgey', price: 45 },
//   { name: 'Squirtle', price: 60 },
//   { name: 'squirtle', price: 60 },
// ]

// items.sort((a, b) => {
//   if (a.name > b.name) {
//       return 1;
//   }
//   if (a.name < b.name) {
//       return -1;
//   }
//   // a es igual a b
//   return 0;
// })


// console.log(items)