describe("factorial", function () {
  it("debe devolver 1 si el número es 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("debe devolver 1 si el número es 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("debe devolver 2 si el número es 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("debe devolver 6 si el número es 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("debe devolver 24 si el número es 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("debe devolver 120 si el número es 5", () => {
    expect(factorial(5)).toBe(120);
  });
  it("debe devolver un error con mensaje si el numero es negativo", () => {
    expect(() => factorial(-1)).toThrow(new Error("Debes ingresar un número positivo"));
  });
});
