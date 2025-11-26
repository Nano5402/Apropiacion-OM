const inventario = ["Camara", "Tripode", "Microfono"]

function agregarInventario(lista, nuevoItem){
    const nuevaLista = [...lista, nuevoItem]
    console.log(`Lista actualizada ${nuevaLista.length} items`);
    return nuevaLista
    
}

const nuevaLista = agregarInventario(inventario, "Periferico", "HDMI")

console.log(inventario);
console.log(nuevaLista);

export { agregarInventario } from './ejercicio2.js'