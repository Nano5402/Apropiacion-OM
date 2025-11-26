const actualizarPerfil = (perfil, ...nuevosDatos) => {
    const nuevoPerfil = { ...perfil, ...nuevosDatos }
    // console.log(nuevosDatos);
    console.log(nuevoPerfil);
    
    for (const nuevo of nuevosDatos) {
        console.log(nuevo);
        
    }

    return{
        perfil,

        
    }
}

const nuevosDatos = actualizarPerfil(perfil,
    { edad: 22, },
    { ciudad: "Medellín"}
);

console.log(nuevosDatos);

export { actualizarPerfil } from './ejercicio5.js'