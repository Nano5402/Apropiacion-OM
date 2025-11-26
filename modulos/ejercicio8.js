function fusionarColecciones(lista1, lista2) {
  try {
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }

    const coleccionFinal = [...lista1, ...lista2];
    return coleccionFinal;
  } catch (error) {
    console.log("Error en la fusión:", error.message);
    return null;
  }
}

export { fusionarColecciones };
