// Organización de noticias en "coderNews":

// El equipo de "coderNews" ha desarrollado un sistema basado en objetos para gestionar y organizar noticias en su plataforma.
const noticias = [];

// El editor jefe de "coderNews" anuncia que el equipo ha comenzado agregando la primera noticia al array. Utilizando objetos literales. 

// const noticia1 = {
//     titulo: "Pokemon es lo mas grande",
//     contenido: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat tempore, minus repudiandae consequuntur repellendus ut ipsam neque harum quisquam necessitatibus animi odio nihil assumenda culpa exercitationem quibusdam quis velit quaerat.",
//     fecha: "hoy",
//     editor: "Yo",
//     lugar: "Charata"
// }

// const noticia2 = {
//     titulo: "Javascript dominara el mundo",
//     contenido: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat tempore, minus repudiandae consequuntur repellendus ut ipsam neque harum quisquam necessitatibus animi odio nihil assumenda culpa exercitationem quibusdam quis velit quaerat.",
//     fecha: "mañana",
//     editor: "Midu",
//     lugar: "Baires"
// }

// noticias.push(noticia1)
// noticias.push(noticia2)
class NoticiasClases{
    constructor(titulo, contenido, fecha, editor, lugar){
        this.titulo = titulo
        this.contenido = contenido
        this.fecha = fecha
        this.editor = editor
        this.lugar = lugar
    }

    mostrar(){
       alert(this.titulo) 
    }
}

function NoticiasContructoras(titulo, contenido, fecha, editor, lugar){
    this.titulo = titulo
    this.contenido = contenido
    this.fecha = fecha
    this.editor = editor
    this.lugar = lugar

    this.mostrar = function (){
        alert(this.titulo)
    }
}

const arrayRecuperado = JSON.parse(localStorage.getItem("noticias"))


// Como se dieron cuenta que el proceso puede ser algo tardado decidieron usar funciones constructoras:
if(arrayRecuperado === null || arrayRecuperado.length === 0){
    

    
    let cantidad = prompt("¿Cuantas noticias quieres agregar?")
    
    for (let i = 0; i < cantidad; i++) {
    
        let titulo = prompt("Titulo")
        let contenido = prompt("contenido")
        let fecha = prompt("fecha")
        let editor = prompt("editor")
        let lugar = prompt("lugar")
    
        let noticiaAux = new NoticiasContructoras(titulo, contenido, fecha, editor, lugar)
        noticias.push(noticiaAux)
    }
    
    //Estaría genial utilizar algun tipo de bucle para molestar al usuario con todas nuestras noticias ¿No?
    
    for (let i = 0; i < noticias.length; i++) {
        alert(noticias[i].titulo)  
    }
    
    // Ahora llegaron nuevas tecnologias para crear estos objetos, las clases, ¿Podrias crear una clase que responda a nuestras necesidades dentro de CoderNews?
    

    
    let cantidadClase = prompt("¿Cuantas noticias quieres agregar?")
    
    for (let i = 0; i < cantidadClase; i++) {
    
        let titulo = prompt("Titulo")
        let contenido = prompt("contenido")
        let fecha = prompt("fecha")
        let editor = prompt("editor")
        let lugar = prompt("lugar")
    
        let noticiaAux = new NoticiasClases(titulo, contenido, fecha, editor, lugar)
        noticias.push(noticiaAux)
    }
    
    for (let i = 0; i < noticias.length; i++) {
        noticias[i].mostrar()  
    }
    
    //Ahora podríamos crear un algoritmo para crear nuevas noticias desde el navegador, ¡VAMOS!
    
    
    
    //¿Y si usamos el localStorage?
    
    
    localStorage.setItem("noticias", JSON.stringify(noticias))
}else{
    for (let i = 0; i < arrayRecuperado.length; i++) {
        const noticiaAux = new NoticiasClases(arrayRecuperado[i].titulo, arrayRecuperado[i].contenido, arrayRecuperado[i].fecha, arrayRecuperado[i].editor, arrayRecuperado[i].lugar)
        noticias.push(noticiaAux)
    }

    for (let i = 0; i < noticias.length; i++) {
        noticias[i].mostrar()  
    }
}
