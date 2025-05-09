function factorial(n) {
  if (n === 0) return 1;
  if (n < 0) throw new Error("Debes ingresar un número positivo");
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}
