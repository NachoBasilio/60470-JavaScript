//Ejercicio 1

let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
}

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?


//Ejercicio 2

let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        alert("triangulo");
    }
}

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?


// Desafíos complementarios

// Actividad 01:
//Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

// Actividad 02:
//Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".