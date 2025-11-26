function registrarActividad(actividad) {
  try {
    const { nombre, notas } = actividad;

    if (!nombre || !notas) {
      throw new Error("La actividad no tiene nombre o notas");
    }

    return { nombre, notas };
  } catch (error) {
    console.log("Error al registrar actividad:", error.message);
    return null;
  }
}

export { registrarActividad };