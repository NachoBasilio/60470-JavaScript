// Ejercicio para if-else:
// En CoderNews, queremos mostrar diferentes mensajes dependiendo del número de comentarios que tiene una noticia.
// Si una noticia tiene menos de 10 comentarios, mostrar el mensaje "Pocos comentarios".
// Si tiene entre 10 y 50 comentarios, mostrar "Comentarios moderados".
// De lo contrario, mostrar "¡Gran debate en marcha!".

// let comentarios = Number(prompt("¿Cuantos comentarios hay?"));

// if( comentarios < 10){
//     alert("Pocos comentarios")
// } else if (comentarios >= 10 && comentarios < 50){
//     alert("Comentarios moderados")
// } else{
//     alert("¡Gran debate en marcha!")
// }

// Ejercicio para switch:
// En CoderNews, queremos asignar un nivel de importancia a las noticias basado en su categoría.
// Crea un switch statement que asigne un nivel de importancia a una noticia según su categoría:
// - "Tecnología" tiene un nivel de importancia de "Alto".
// - "Deportes" tiene un nivel de importancia de "Medio".
// - "Política" tiene un nivel de importancia de "Bajo".
// - Para cualquier otra categoría, el nivel de importancia es "Desconocido".

// let categoria = prompt("¿De que categoria es la nota?");

//     switch (categoria) {
//         case "Tecnología":
//             alert("Alta")
//             break
//         case "Deportes":
//             alert("Medio")
//             break
//         case "Política":
//             alert("Bajo")
//             break
//         default:
//             alert("Desconocido")
//             break;
//     }


// Ejercicio para for:
// En CoderNews, queremos imprimir los títulos de las noticias con un número de serie.
// Utiliza un bucle for para imprimir el número de serie seguido del título de la noticia.

// let titulo1 = "Nuevo lanzamiento de iPhone";
// let titulo2 = "El equipo local gana el campeonato";
// let titulo3 = "Nuevo presidente elegido";

// for (let index = 1; index <= 3 ; index++) {
//     if(index === 1){
//         alert(titulo1)
//     }else if(index === 2) {
//         alert(titulo2)
//     }else{
//         alert(titulo3)
//     }
    
// }

// Ejercicio para while:
// En CoderNews, queremos permitir a los usuarios buscar una noticia por su título.
// Utiliza un bucle while para buscar el título de una noticia ingresado por el usuario.


// let tituloBuscadoWhile = "Nuevo presidente elegido";

// let tituloUsuario = prompt("¿Que noticia busca?")
// let bandera = true

// while(bandera){
//     if(tituloUsuario === tituloBuscadoWhile){
//         bandera = false
//         alert("Encontraste tu noticia")
//     }else{
//         alert("No esta esa noticia")
//         tituloUsuario = prompt("¿Que noticia busca?")
//     }
// }




// Ejercicio para do-while:
// En CoderNews, queremos permitir a los usuarios votar si les gustó o no una noticia.
// Utiliza un bucle do-while para solicitar al usuario su voto (sí o no) al menos una vez.
// Continúa solicitando el voto mientras el usuario ingrese una respuesta inválida.

//   let voto;
//   let bandera = true;

//     do {
//         voto = prompt("Te gusto o no esta noticia, ingrese si o no")
//         if(voto == "si" || voto == "no"){
//             bandera = false
//         }
//     } while (bandera);

// Ejercicio para while:
// En CoderNews, queremos permitir a los usuarios buscar una noticia por su título.
// Utiliza un bucle while para buscar el título de una noticia ingresado por el usuario.
// Si la noticia está presente, muestra un mensaje indicando que la noticia fue encontrada.
// Si no, muestra un mensaje indicando que la noticia no fue encontrada.

let titulo1While = "Nuevo lanzamiento de iPhone";
let titulo2While = "El equipo local gana el campeonato";
let titulo3While = "Nuevo presidente elegido";

let tituloBuscado = prompt("Ingresa el título de la noticia que quieres buscar:");
let encontrado = true;
let contador = 1;

while(encontrado){
    if(tituloBuscado === titulo1While){
        encontrado = false
        alert("Encontraste tu noticia en " + contador + " intentos" )
    }else if (tituloBuscado === titulo2While){
        encontrado = false
        alert("Encontraste tu noticia en " + contador + " intentos" )
    }else if (tituloBuscado === titulo3While){
        encontrado = false
        alert("Encontraste tu noticia en " + contador + " intentos" )
    }
    else{
        contador = contador + 1
        tituloBuscado = prompt("Ingresa el título de la noticia que quieres buscar:")
    }
}


// En CoderNews, queremos permitir a los usuarios calificar la relevancia de una noticia.
// El programa solicitará al usuario que ingrese la relevancia de una noticia en una escala del 1 al 5.
// Utiliza un bucle while para validar la entrada del usuario y permitirle intentarlo nuevamente si la entrada no está en el rango válido.
// Implementa un switch para mostrar un mensaje personalizado dependiendo de la calificación ingresada por el usuario.

// Variable para almacenar la calificación de relevancia ingresada por el usuario
// let relevanciaNoticia;

// Bucle para validar si la entrada del usuario es un número
// let resenaEfectiva = false;

// Solicitar al usuario que ingrese la relevancia de la noticia
// let entrada = prompt("Por favor, califica la relevancia de esta noticia en una escala del 1 al 5:"); //¿Que hay que hacer con este dato?

// switch (relevanciaNoticia) {
//     case 1:
//         console.log("Esta noticia tiene muy poca relevancia.");
//         resenaEfectiva = true
//         break;
//     case 2:
//         console.log("Esta noticia tiene poca relevancia.");
//         resenaEfectiva = true
//         break;
//     case 3:
//         console.log("Esta noticia tiene una relevancia moderada.");
//         resenaEfectiva = true
//         break;
//     case 4:
//         console.log("Esta noticia tiene alta relevancia.");
//         resenaEfectiva = true
//         break;
//     case 5:
//         console.log("Esta noticia tiene una relevancia muy alta. ¡Es un imperdible!");
//         resenaEfectiva = true
//         break;
//     default:
//         console.log("La calificación ingresada no es válida.");
// }