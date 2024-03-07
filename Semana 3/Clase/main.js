// function saludar(saludo){
//     console.log(saludo)
// }


// saludar("Hola")


// saludar("Buenos dias")


// saludar("Buenas noches")


// saludar("Chau")

// let resultado; 


// function suma(numero1, numero2){
 
//    let resultado = numero1 + numero2
    
// }
// suma(3,5)

// console.log(resultado)


// function calculadora(primerNumero, segundoNumero, operacion) {
//     let resultado;
//     switch (operacion) {
//         case "+":
//             resultado =  primerNumero + segundoNumero;
//             break;
//         case "-":
//             resultado = primerNumero - segundoNumero;
//             break;
//         case "*":
//             resultado = primerNumero * segundoNumero;
//             break;
//         case "/":
//             resultado = primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//     }

//     return resultado
// }
// console.log(calculadora(10, 5, "+"));


// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
// }
// //No se puede acceder a la variable resultado fuera del bloque
// console.error(resultado);


//Funciones anónimas

const suma = function (num1, num2, num3){
    
    let resultado = num1 + num2 + num3
    return resultado
}

console.log(suma(1,2,3))


//Funciones arrow

const sumaArrow = (num1, num2, num3) => {
    
    let resultado = num1 + num2 + num3
    return resultado
}

console.log(sumaArrow(7,2,3))


//Funciones normal

function sumaNormal(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}

console.log(sumaNormal(3,5))