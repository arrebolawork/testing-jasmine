describe("detecta si el numero es par", () => {
  it("Escribe una función llamada esPar", () => {
    expect(typeof esPar).toEqual("function");
  });

  it("la función recibe un número", () => {
    // En este caso no se puede verificar directamente que recibe un número,
    // pero sí que funciona con un número sin lanzar error.
    expect(() => esPar(4)).not.toThrow();
  });

  it("que la función devuelva verdadero si es par", () => {
    expect(esPar(2)).toBe(true);
    expect(esPar(10)).toBe(true);
    expect(esPar(0)).toBe(true);
  });

  it("que devuelva falso si es impar", () => {
    expect(esPar(1)).toBe(false);
    expect(esPar(9)).toBe(false);
    expect(esPar(-3)).toBe(false);
  });
});
