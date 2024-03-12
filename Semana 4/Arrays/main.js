// // Organización de noticias en "coderNews":
// // El equipo de "coderNews" ha desarrollado un sistema basado en arrays para gestionar y organizar noticias en su plataforma.
// const noticias = [];

// // El editor jefe de "coderNews" anuncia que el equipo ha comenzado agregando la primera noticia al array, titulada "Nueva actualización del sistema operativo".

// noticias.push("Nueva actualización del sistema operativo")
// console.log(noticias)

// // Agregando más noticias:
// // El artículo informa cómo el equipo agrega noticias adicionales a su lista utilizando el método "push" o "unshift".

// noticias.push("Hombre mordio perro")
// noticias.unshift("JavaScript domina el mundo")
// console.log(noticias)

// // Eliminando noticias:
// // El equipo está revisando qué noticias son más relevantes. La página de noticias revela cómo eliminan la primera noticia utilizando el método "shift".



// // También se informa que el equipo decide eliminar la última noticia utilizando el método "pop".


// // Actualizando noticias:
// // El equipo decide actualizar una noticia existente utilizando el método "splice". El artículo detalla cómo modifican una noticia existente y agregan una nueva en su lugar.

// //noticias.splice(1, 1)



// // Uniendo las noticias:
// // El artículo muestra cómo los periodistas utilizan el método "join" para unir todas las noticias en una sola cadena legible.

// const todasLasNoticias = noticias.join(", ")

// console.log(todasLasNoticias)


// // El editor en jefe revela que el equipo está revisando el contenido utilizando los métodos "indexOf" e "includes" para identificar ciertas noticias.

// const indice = noticias.indexOf("Hombre mordio perro")

// noticias.splice(indice, 1, "Coder abrio un nuevo curso")



// // Longitud del array de noticias:
// // El editor destaca el uso del método "length" para obtener el número total de noticias en la lista.

// console.log(noticias.length)

// // Obtener una copia de las primeras dos noticias utilizando el método "slice":

// const lasDosPrimerasNoticias = noticias.slice(0, 2)

// console.table(lasDosPrimerasNoticias)

//manteca, yerba, masita

const productos = []

let comprar = confirm("¿Quiere comprar algo?")

if(comprar == true){
    let productoAComprar = prompt("¿Quiere manteca, yerba o masita?")

    while(comprar){
        switch(productoAComprar){
            case "manteca":
                productos.push("manteca")

                break
            case "yerba":
                productos.push("yerba")

                break
            case "masita":
                productos.push("masita")

                break
            default:
                alert("No tenemo de eso!")

        }
        comprar = confirm("¿Quiere seguir comprardo?")
        if(comprar){
            productoAComprar = prompt("¿Quiere manteca, yerba o masita?")
        }
    }

}else{
    alert("Esta bien, nos vemos")
}


productos.splice(4, 0, "caramelo")

alert(productos.join(", "))



productos.push(prompt("¿Quiere manteca, yerba o masita?"))