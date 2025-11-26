// Declaramos una constante donde me dan los siguientes valores:
const ventas = [
    {producto: "Teclado", detalles: {precio: 50, unidades: 3}},
    {producto: "Mouse", detalles: {precio: 20, unidades: 5}}
]

// Creo una función donde empleo una destructuración anidada la cual la destructuración anidada es: La desestructuración anidada es una técnica en programación,
// principalmente en JavaScript, que permite extraer propiedades de objetos o elementos de matrices que están dentro de otras estructuras de datos anidadas.
// Donde obtengo el precio y las unidades del PRIMER OBJETO
function detallesPrimerProducto(){
    const [{ detalles: {precio, unidades}}] = ventas
    console.log("Precio:" , precio, "Unidades:", unidades );
    
    // Con el return pido el valor de precio POR unidades del PRIMER OBJETO
    return precio * unidades; 
}


//Y aqui simplemente hago el log de detallesPrimerProducto donde me dará el precio, sus unidades y el valor TOTAL, es decir precio * unidades.
console.log(detallesPrimerProducto());

export { detallesPrimerProducto } from './ejercicio6.js'