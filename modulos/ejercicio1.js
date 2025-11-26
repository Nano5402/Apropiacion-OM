 function procesarPedido(a, ...b){
    const { cliente, producto, cantidad } = a
    
    return{
        cliente,
        producto,
        cantidad,
        extras: b
    }
}

const pedido ={
    cliente: "Paulo",
    producto: "Computador",
    cantidad: 25
}

let nuevo = procesarPedido(pedido, "Extra 1", "Extra 2", "Extra 3")

console.log(nuevo);

export { procesarPedido } from './ejercicio1.js'