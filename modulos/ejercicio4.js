function configuracionUsuario(defaults, personalizadas) {
  const configuracionPersonalizada = { ...defaults, ...personalizadas };
  return configuracionPersonalizada;
}

export { configuracionUsuario };