// let nombre = prompt("¿Cual es tu nombre?")
// let edad = Number(prompt("¿Cual es tu edad?"))


// if(nombre !== ""){
//     if(edad >= 18){
//         alert("Bienvenido")
//     }else{
//         alert("Todo mal con vos, edad")
//     }
// }else{ 
//     alert("Todo mal con vos, nombre")
// }

// if( (nombre !== "") || edad >= 18 ){
//     alert("Bienvenido")
// } else{
//     alert("Todo mal con vos")
// }

// if( !(nombre == "") && edad >= 18 ){
//     alert("Bienvenido")
// } else{
//     alert("Todo mal con vos")
// }

// let entrada = prompt("Ingresar un nombre");

// switch (entrada) {
//     case "ANA":
//          alert("HOLA ANA");
//          break
//     case "JUAN":
//          alert("HOLA JUAN");
//          break
//     case "Pepito":
//          alert("Hola pepito")
//          break
//     default:
//         alert("¿QUIÉN SOS?")
//         break
// }


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));

// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     console.log(ingresarNumero + " X " + i + " = " + resultado);
// }

// let hash = "#"
// for(let i = 0; i <= 100; i++){
//     console.log(hash)
//     hash = hash + "#"
// }

// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC"){
//     alert("El usuario ingresó " + entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


let entrada = prompt("Ingresar un dato");

do {
    alert("El usuario ingresó " + entrada);
    entrada = prompt("Ingresar otro dato");
} while (entrada != "ESC");
