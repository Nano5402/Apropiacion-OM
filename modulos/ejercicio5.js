const actualizarPerfil = (perfil, ...nuevosDatos) => {
  const nuevoPerfil = { ...perfil, ...nuevosDatos };
  return nuevoPerfil;
};

export { actualizarPerfil };