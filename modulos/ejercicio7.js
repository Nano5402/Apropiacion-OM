function evaluar(...valores) {
  try {
    // Verificar que todos los valores sean números
    for (const v of valores) {
      if (typeof v !== "number" || isNaN(v)) {
        throw new Error(`Valor inválido: ${v}`);
      }
    }

    // Crear una nueva lista (sin mutar la original)
    const nuevaLista = [...valores];

    // Calcular el promedio
    const suma = nuevaLista.reduce((acc, num) => acc + num, 0);
    const promedio = suma / nuevaLista.length;

    return promedio;
  } catch (error) {
    console.log("Error en la evaluación:", error.message);
    return null;
  }
}

export { evaluar };