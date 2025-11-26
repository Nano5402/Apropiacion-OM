import { procesarPedido, agregarInventario, registrarActividad, configuracionUsuario, actualizarPerfil, detallesPrimerProducto, evaluar, fusionarColecciones } from "./modulos/index.js";

// Ejercicio 1
const pedido = { cliente: "Paulo", producto: "Computador", cantidad: 25 };
console.log(procesarPedido(pedido, "Extra 1", "Extra 2", "Extra 3"));

// Ejercicio 2
const inventario = ["Camara", "Tripode", "Microfono"];
console.log(agregarInventario(inventario, "Periferico", "HDMI"));

// Ejercicio 3
const usuario = { nombre: "Dan", fecha: "22/11/2025", notas: [1, 2, 3] };
console.log(registrarActividad(usuario));

// Ejercicio 4
const defaults = { tema: "Claro", idioma: "es" };
const personalizacion1 = { idioma: "en" };
console.log(configuracionUsuario(defaults, personalizacion1));

// Ejercicio 5
const perfil = { nombre: "Godinez", pais: "Colombia" };
const resultado = actualizarPerfil(perfil, { edad: 22 }, { ciudad: "Medellín" });

console.log("Perfil actualizado:", resultado);

// Ejercicio 6
console.log(detallesPrimerProducto());

// Ejercicio 7
console.log("Promedio válido:", evaluar(10, 20, 30)); // → 20
console.log("Con error:", evaluar(10, "hola", 30));   // → null y muestra mensaje de error

// Ejercicio 8
const listaA = ["Camara", "Tripode"];
const listaB = ["Microfono", "Luz"];

const resultadoFusion = fusionarColecciones(listaA, listaB);
console.log("Colección fusionada:", resultadoFusion);

// Ejemplo con error
const resultadoFusionError = fusionarColecciones(listaA, "no es arreglo");
console.log("Con error:", resultadoFusionError);