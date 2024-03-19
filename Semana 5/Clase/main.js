// const personaLiteral = { 
//      nombre: "Homero",                
//     edad: 39,     calle: "Av. Siempreviva 742",
//      saludar: function() {
//         console.log('¡Hola mundo!');
//     }
// }

// const persona2 = { 
//     nombre: "Homero",                
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// }
                   

// persona1.saludar()


//  function PersonaConstructora(literal) {
//      this.nombre = literal.nombre;
//      this.edad   = literal.edad;
//      this.calle  = literal.calle;
//  }

// const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });


// const persona2 = new PersonaConstructora({
//     nombre: "Nacho",
//     edad: 25,
//      calle: "calle falsa 123"
//  })

//  console.log(persona2)
// console.log(personaLiteral);


// function Auto(color, marca, modelo){
//     this.color = color
//     this.marca = marca
//     this.modelo = modelo
//     this.prendido = false
//     this.arranca = ()=>{
//         console.log("Brrrrrrrm")
//         this.prendido = true
//     }
//     this.apagar = () => {
//         console.log("Shhhhh")
//         this.prendido = false
//     }
//     this.plotear = ( nuevoColor ) => {
//         this.color = nuevoColor
//         console.log("Su color ahora es " + this.color)
//     }
// }


// const auto1 = new Auto("Rojo", "Toyota", "Cross")
// const auto2 = new Auto("Verde", "Toyota", "Hilux")


// console.log(auto1.prendido)

// auto1.arranca()

// console.log(auto1.prendido)

// auto1.apagar()

// console.log(auto1.prendido)

// auto1.plotear("Amarillo")


// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//         this.atleta = false
//     }
// }


// const persona1 = new Persona("Homero", 39, 
// "Av. Siempreviva 742");



class Personaje{
    constructor(nombre, raza, clase, lvl, faccion){
        this.nombre = nombre
        this.raza = raza
        this.clase = clase
        this.lvl = lvl
        this.faccion = faccion
    }

    subirDeNivel(){
         this.lvl = this.lvl + 1
    }
}


const todosLosPersonajes = []

let arrayRecuperado = JSON.parse(localStorage.getItem("personajes"))

let bandera = true

if(arrayRecuperado === null || arrayRecuperado.length === 0){
    while(bandera){

        let nombre = prompt("¿Cual es el nombre de su personaje?")
        let raza = prompt("¿Cual es la raza de su personaje?")
        let clase = prompt("¿Cual es la clase de su personaje?")
        let faccion = prompt("¿Cual es la faccion de su personaje?")
    
        let personajeAux = new Personaje(nombre, raza, clase, 1, faccion)
    
        todosLosPersonajes.push(personajeAux)
    
        bandera = confirm("¿Quiere seguir?")
    }

    let todosLosPersonajesEnTexto = JSON.stringify(todosLosPersonajes)
    
    localStorage.setItem("personajes", todosLosPersonajesEnTexto )

}else{
    for (let i = 0; i < arrayRecuperado.length; i++) {
        alert(arrayRecuperado[i].nombre)
        
    }
}

