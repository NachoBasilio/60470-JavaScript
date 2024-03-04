// Actividad 01:
const IVA = 1.21;
let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

// Función para calcular el precio con IVA
const calcularPrecioConIVA = (imp, iva) => imp * iva;
const precioConIVA = calcularPrecioConIVA(parseFloat(importe), IVA);
console.log("El precio con IVA es:", precioConIVA);

// Preguntas:
// 1. ¿Qué tiene que hacer este código?
// 2. ¿Por qué no cumple con su función?

// Actividad 02:
const valorM2 = 31.83; // Valor fijo del seguro por Metro cuadrado
const comision = 1.025; // Comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");

// Función para calcular el costo de la póliza
const calcularPoliza = m2 => m2 * valorM2 * comision;
const valorPoliza = calcularPoliza(parseFloat(M2));
console.log("El costo de la póliza es: $", valorPoliza);

// Preguntas:
// 1. ¿Qué tiene que hacer este código?
// 2. ¿Por qué no cumple con su función?
// 3. ¿Qué propuesta podrías hacer para que tenga sentido su uso?
