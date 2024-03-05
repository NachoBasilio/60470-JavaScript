function mostrarPorPantalla (texto) {
    document.write(texto)
}

//Función tradicional para calcular la cantidad de caracteres en un titular de noticia:

//Descripción: En CoderNews, necesitamos asegurarnos de que los titulares de las noticias
//no excedan cierta longitud para mantener la presentación limpia. Esta función calculará 
//la cantidad de caracteres en un titular dado.

function calculadoraDeCaracteres (titulo){
    return titulo.length
}

let cantidadDeCaracteres = calculadoraDeCaracteres("Nacafdasdfasdfasdfasdfho")

//Función para determinar si una noticia es corta o larga:

//Descripción: CoderNews quiere clasificar automáticamente las noticias como cortas o largas para ayudar 
//a los lectores a elegir qué leer. Esta función determina si una noticia dada es corta o larga según la longitud de su contenido.

//Pista: Tiene que retornar un booleano si es mayor a 100

function clasificadoraDeTitulos(cantidad){
    if(cantidad <= 10){
        console.log("Titulo corto")
    }else if(cantidad <= 50){
        console.log("Titulo medio")
    }else{
        console.log("Titulo largo")
    }
}

clasificadoraDeTitulos(cantidadDeCaracteres)


//Función de flecha para determinar la importancia de una noticia según la cantidad de comentarios:

//Descripción: CoderNews quiere etiquetar automáticamente la importancia de una noticia según la 
//cantidad de comentarios que recibe. Esta función determina esa importancia.


const clasificadoraDeImportancia = (comentarios) => {
    if(comentarios <= 5){
        return 1
    }else if (comentarios <= 10){
        return 2
    }else if (comentarios <= 20){
        return 3
    }else if (comentarios <= 30){
        return 4
    }else if (comentarios <= 50){
        return 5
    }else{
        return false
    }
}

let puntos = clasificadoraDeImportancia(15)
let puntos2 = clasificadoraDeImportancia(50)



//Función anónima que muestra un mensaje personalizado según la relevancia de una noticia:

//Descripción: Los usuarios de CoderNews pueden calificar la relevancia de las noticias, 
//y esta función proporciona un mensaje personalizado según la calificación

const maquinaQueHaceComentariosPersonalizados = function (calificacion) {
    switch (calificacion) {
        case 1:
           return "Esta noticia tiene muy poca relevancia.";
        case 2:
            return "Esta noticia tiene poca relevancia.";
        case 3:
            return "Esta noticia tiene una relevancia moderada.";
        case 4:
            return "Esta noticia tiene alta relevancia.";
        case 5:
            return "Esta noticia tiene una relevancia muy alta. ¡Es un imperdible!";
        default:
            return "La calificación ingresada no es válida.";
    }
}

console.log(maquinaQueHaceComentariosPersonalizados(puntos))
console.log(maquinaQueHaceComentariosPersonalizados(puntos2))



