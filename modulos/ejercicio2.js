function agregarInventario(lista, ...nuevosItems) {
  const nuevaLista = [...lista, ...nuevosItems];
  return nuevaLista;
}

export { agregarInventario };