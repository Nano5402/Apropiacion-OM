function registrarActividad(actividad){
    const { nombre, notas } = usuario
}

try{
    if (!nombre || !notas)
    throw new Error("La ");
} catch(error){
    console.log(error.message);
    
}

const usuario ={
    nombre: "Dan",
    fecha: "22/11/2025",
    notas: [1, 2, 3]
}

registrarActividad(usuario)

export { registrarActividad } from './ejercicio3.js'