const defaults = { tema: "Claro", idioma: "es"}

function configuracionUsuario(defaults, personalizadas){
    const configuracionPersonalizada = { ...defaults, ...personalizadas}

    return configuracionCombinada
}

const personalizacion1 = { idioma: "en" }
const {idioma} = configuracionUsuario(defaults, personalizacion1)
console.log("Personalizacion 1: ", idioma);

const perfil ={
    nombre: "Godinez",
    pais: "Colombia"
}

export { configuracionUsuario } from './ejercicio4.js'