function procesarPedido(a, ...b) {
  const { cliente, producto, cantidad } = a;
  return { cliente, producto, cantidad, extras: b };
}

export { procesarPedido };