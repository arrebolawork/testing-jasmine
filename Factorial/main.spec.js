describe("factorial", function () {
  it("debe devolver 1 si el número es 0", function () {
    expect(factorial(0)).toBe(1);
  });

  it("debe devolver 1 si el número es 1", function () {
    expect(factorial(1)).toBe(1);
  });

  it("debe devolver 2 si el número es 2", function () {
    expect(factorial(2)).toBe(2);
  });

  it("debe devolver 6 si el número es 3", function () {
    expect(factorial(3)).toBe(6);
  });

  it("debe devolver 24 si el número es 4", function () {
    expect(factorial(4)).toBe(24);
  });

  it("debe devolver 120 si el número es 5", function () {
    expect(factorial(5)).toBe(120);
  });
});
